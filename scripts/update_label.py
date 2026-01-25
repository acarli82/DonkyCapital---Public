import json
import sys
import os

# CONFIGURAZIONE PERCORSI
MASTER_FILE = r"C:\Users\Andrea\Documents\Sites\DonkyCapital - Public\dictionaries\labels.master.json"
# Percorso dello script di sync da lanciare dopo l'aggiornamento
SYNC_SCRIPT = r"C:\Users\Andrea\Documents\Sites\DonkyCapital - Public\dictionaries\sync_from_master.py"

def update_nested_dict(d, path, value):
    """Aggiorna il dizionario master seguendo il percorso a punti"""
    keys = path.split('.')
    for key in keys[:-1]:
        d = d.setdefault(key, {})
    d[keys[-1]] = value

def main():
    if len(sys.argv) < 3:
        print("Utilizzo: python update_label.py <percorso.chiave.lingua> <nuovo_valore>")
        print("Esempio: python update_label.py auth.login.it \"Accedi\"")
        sys.exit(1)

    path = sys.argv[1]
    new_value = sys.argv[2]

    if not os.path.exists(MASTER_FILE):
        print(f"ERRORE: File master non trovato in {MASTER_FILE}")
        sys.exit(1)

    # 1. Carica il Master
    with open(MASTER_FILE, 'r', encoding='utf-8') as f:
        try:
            data = json.load(f)
        except json.JSONDecodeError:
            print("ERRORE: Il file master non e un JSON valido.")
            sys.exit(1)

    # 2. Modifica la chiave
    try:
        update_nested_dict(data, path, new_value)
    except Exception as e:
        print(f"ERRORE durante l'aggiornamento del percorso: {e}")
        sys.exit(1)

    # 3. Salva il Master aggiornato
    with open(MASTER_FILE, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)

    print(f"Master aggiornato correttamente: {path} -> {new_value}")
    
    # 4. Lancia automaticamente il sync per aggiornare i file it.json, en.json...
    if os.path.exists(SYNC_SCRIPT):
        print("Avvio sincronizzazione file lingua...")
        os.system(f"python \"{SYNC_SCRIPT}\"")
    else:
        print(f"ATTENZIONE: Script di sync non trovato in {SYNC_SCRIPT}")

if __name__ == "__main__":
    main()