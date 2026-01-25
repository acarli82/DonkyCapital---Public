import json
import os

# CONFIGURAZIONE PERCORSI
MASTER_FILE = r"C:\Users\Andrea\Documents\Sites\DonkyCapital - Public\dictionaries\labels.master.json"
# I file verranno creati nella stessa cartella del master
OUTPUT_DIR = os.path.dirname(MASTER_FILE)
LANGS = ['it', 'en', 'fr', 'de', 'es']

def build_lang_dict(master_node, lang):
    """
    Percorre ricorsivamente il master per estrarre la lingua specifica.
    """
    # Se il nodo corrente contiene la lingua come chiave, abbiamo raggiunto il valore finale
    if isinstance(master_node, dict) and lang in master_node:
        return master_node[lang]
    
    new_node = {}
    if isinstance(master_node, dict):
        for key, value in master_node.items():
            if isinstance(value, dict):
                result = build_lang_dict(value, lang)
                # Aggiunge al dizionario solo se la traduzione esiste (non è None)
                if result is not None:
                    new_node[key] = result
                    
    return new_node if new_node else None

def main():
    if not os.path.exists(MASTER_FILE):
        print(f"ERRORE: File master non trovato in {MASTER_FILE}")
        return

    print(f"Lettura file master: {MASTER_FILE}")

    with open(MASTER_FILE, 'r', encoding='utf-8') as f:
        try:
            master_data = json.load(f)
        except json.JSONDecodeError:
            print("ERRORE: Il file master non e un JSON valido.")
            return

    for lang in LANGS:
        lang_dict = build_lang_dict(master_data, lang)
        
        # Se la lingua non ha traduzioni nel master, creiamo comunque un file vuoto {} 
        # o saltiamo la creazione se preferisci. Qui creiamo il file.
        if lang_dict is None:
            lang_dict = {}

        output_path = os.path.join(OUTPUT_DIR, f"{lang}.json")
        
        with open(output_path, 'w', encoding='utf-8') as f:
            json.dump(lang_dict, f, indent=2, ensure_ascii=False)
        
        print(f"File generato correttamente: {lang}.json")

    print(f"\nSincronizzazione completata nella cartella: {OUTPUT_DIR}")

if __name__ == "__main__":
    main()