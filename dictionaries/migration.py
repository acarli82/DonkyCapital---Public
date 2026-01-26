import json
import os

# Configurazione file (adattali ai tuoi percorsi)
lang_files = {
    'it': 'it.json',
    'en': 'en.json',
    'fr': 'fr.json',
    'de': 'de.json',
    'es': 'es.json'
}

master = {}
all_keys = set()
loaded_data = {}

# 1. Carica i datiimport json
import os

def get_all_paths(d, current_path=None):
    """Estrae tutti i percorsi (es. 'assetClasses.stocks') da un JSON nidificato"""
    if current_path is None:
        current_path = []
    paths = set()
    for k, v in d.items():
        new_path = current_path + [k]
        if isinstance(v, dict):
            paths.update(get_all_paths(v, new_path))
        else:
            paths.add(".".join(new_path))
    return paths

def get_value_by_path(d, path_str):
    """Recupera un valore seguendo il percorso puntato"""
    keys = path_str.split('.')
    curr = d
    for k in keys:
        if isinstance(curr, dict) and k in curr:
            curr = curr[k]
        else:
            return None
    return curr

def set_value_by_path(master, path_str, lang_values):
    """Costruisce la struttura nidificata nel master inserendo le lingue alla fine"""
    keys = path_str.split('.')
    curr = master
    for i, k in enumerate(keys):
        if i == len(keys) - 1:
            curr[k] = lang_values
        else:
            if k not in curr:
                curr[k] = {}
            curr = curr[k]

# 1. Caricamento dati
loaded_data = {}
all_paths = set()
for lang, path in lang_files.items():
    if os.path.exists(path):
        with open(path, 'r', encoding='utf-8') as f:
            data = json.load(f)
            loaded_data[lang] = data
            all_paths.update(get_all_paths(data))

# 2. Creazione Master
master = {}
for path in sorted(all_paths):
    lang_translations = {}
    for lang in lang_files.keys():
        val = get_value_by_path(loaded_data[lang], path)
        lang_translations[lang] = val # Sarà null se manca
    
    set_value_by_path(master, path, lang_translations)

# 3. Salvataggio
with open('labels.master.json', 'w', encoding='utf-8') as f:
    json.dump(master, f, indent=2, ensure_ascii=False)

print(f"Master creato correttamente con struttura nidificata!")