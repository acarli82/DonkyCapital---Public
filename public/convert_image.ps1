# =============================
# Script: Converti immagini in WebP (con controllo esistenza)
# =============================

# 1️⃣ Directory principale da scansionare
$rootDir = "C:\Users\Andrea\Documents\Sites\DonkyCapital - Public\public"

# 2️⃣ Percorso del cwebp.exe
$cwebpPath = "C:\Users\Andrea\Downloads\libwebp-1.6.0-windows-x64\libwebp-1.6.0-windows-x64\bin\cwebp.exe"

# 3️⃣ Qualità WebP (0-100)
$quality = 80

# 4️⃣ Trova tutte le immagini JPG/PNG ricorsivamente
$images = Get-ChildItem -Path $rootDir -Recurse -Include *.jpg, *.jpeg, *.png

foreach ($img in $images) {

    # Genera il percorso di output sostituendo l'estensione originale con .webp
    $webpFile = [System.IO.Path]::ChangeExtension($img.FullName, ".webp")

    # VERIFICA: Se il file .webp NON esiste, procedi alla conversione
    if (-not (Test-Path -Path $webpFile)) {
        Write-Host "🔄 Converting: $($img.Name)..." -ForegroundColor Cyan
        & $cwebpPath $img.FullName -q $quality -o $webpFile
    } 
    else {
        # Se esiste, lo salta e passa alla prossima immagine
        Write-Host "✅ Skipped: $($img.Name) (WebP already exists)" -ForegroundColor Yellow
    }
}

Write-Host "`nOperazione completata!" -ForegroundColor Green