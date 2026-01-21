# =============================
# Script: Converti immagini in WebP
# =============================

# 1️⃣ Inserisci qui la directory principale da scansionare
$rootDir = "C:\Users\Andrea\Documents\Sites\DonkyCapital - Public\public"

# 2️⃣ Percorso del cwebp.exe
$cwebpPath = "C:\webp\bin\cwebp.exe"  # Modifica se hai messo cwebp in altra cartella

# 3️⃣ Qualità WebP (0-100)
$quality = 80

# 4️⃣ Trova tutte le immagini JPG/PNG ricorsivamente
$images = Get-ChildItem -Path $rootDir -Recurse -Include *.jpg, *.jpeg, *.png

foreach ($img in $images) {

    # Genera il percorso di output con estensione .webp
    $webpFile = Join-Path $img.DirectoryName ($img.BaseName + ".webp")

    # Salta se già esiste un file webp con lo stesso nome
    if (-not (Test-Path $webpFile)) {
        Write-Host "Converting: $($img.FullName) -> $webpFile"
        & $cwebpPath $img.FullName -q $quality -o $webpFile
    } else {
        Write-Host "Skipped (already exists): $webpFile"
    }
}