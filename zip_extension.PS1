#
# Package 'extension' directory to upload to Chrome Web Store
#
Param (
	[Parameter(Mandatory=$True)][string]$version
)
Add-Type -AssemblyName System.IO.Compression.FileSystem
#[Reflection.Assembly]::LoadWithPartialName( "System.IO.Compression.FileSystem" )
[System.IO.Compression.ZipFile]::CreateFromDirectory( $PSScriptRoot + '\' + 'extension', $PSScriptRoot + '\' + 'wander_' + $version +'.zip', [System.IO.Compression.CompressionLevel]::Optimal, $False)