# *tuCrypto*
## Descripción
Aplicativo en **React Native** sobre las **Criptomonedas** que cuenta con las siguientes caracteristicas:
- Lista de **Criptomonedas**.
- Valor de cada una.
- Porcentaje de cambio de su valor en la última hora.
- Sección de detalles.
- Área de busqueda.
- Sección de **Favoritos**.
- Opción de *añadir* y *eliminar* de **Favoritos**.
- Listas horizontales de los Mercados de las **Criptomonedas** (*esta dentro del detalle de cada moneda*).

## Requisitos *(Recomendados)*
Se debe tener en cuenta que en **Windows** solo se puede compilar la aplicación para *Android*, si se quiere hacer para *iOS* se necesita una **MacOS**.  
**Nota:** El proyecto se realizo para plataformas *Android* principalmente.    
  
  
Para la instalación en **Windows 10** utilizamos *Chocolatey* un gestor de paquetes para Windows. Para ello abrimos *PowerShell* como administradores y ejecutamos el siguiente comando: 
  
  
```powershell

Set-ExecutionPolicy Bypass -Scope Process -Force;
[System.Net.ServicePointManager]::SecurityProtocol =
[System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object
System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))

```  

Para verificar que esta instalado correctamente usamos el comando:  
 ```powershell
 
 choco
 
 ```
  
Ahora instalaremos las dependencias iniciales ejecutando el siguiente comando:  
 ```powershell
 
 choco install -y nodejs.install python2 openjdk8
 
 ```  
   
Como se observa instalamos *[Node](https://nodejs.org/es/), [Python](https://www.python.org/)*, y *[JDK](https://www.oracle.com/co/java/technologies/javase/javase-jdk8-downloads.html)* que también se pueden descargar desde su página correspondiente.  

## Android Studio   
Para ver los resultados utilizamos [*Android Studio*](https://developer.android.com/studio/index.html) en su instalación se debe agregar:  
- *Android SDK*
- *Android SDK Platform*
- *Android Virtual Device*  
 

Una vez instalado el Android Studio verificamos unos paquetes en: *Preferences → Appearance & Behavior → System Settings → Android SDK* y en la pestaña *SDK Platforms*.
En la parte inferior derecha habilitamos el check que dice *Show Package Details* que mostrará más opciones.  

Marcamos las siguientes opciones:  
  
- *Android SDK Platform 29*
- *Intel x86 Atom_64 System Image*
- *Google APIs Intel x86 Atom System Image*   
  
  
![AndroidStudio](https://user-images.githubusercontent.com/83682738/119674350-c25c3680-be01-11eb-8203-531a47830a15.png)  
  
Luego en la pestaña *SDK Tools* verificamos que este seleccionado *Android SDK Build-Tools* y habilitamos el check *Show Package Details* y nos aseguramos que la versión *29.0.2* este seleccionada, posteriormente damos en ***Apply***  
  
![image](https://user-images.githubusercontent.com/83682738/119677537-6ba42c00-be04-11eb-9675-ac5aeb23c171.png)  
  
  
Por ultimo, debemos ir en Windows a *Control Panel → User Accounts → User Accounts → Change my environment variables* y agregar nueva variable, como nombre de variable ponemos *ANDROID_HOME* y como valor *C:\Users\Usuario\AppData\Local\Android\Sdk*. Para verificarlo podemos utilizar el siguiente comando en *PowerShell*:  
  
```powershell
 
 Get-ChildItem -Path Env:\
 
 ```  
   
Ahora la variable *Path* la editamos y damos en nuevo agregando *%LOCALAPPDATA%\Android\Sdk\platform-tools* aceptamos y eso es todo para poder virtualizar el proyecto usando ***Android Studio***.  
  
## Comandos  
Algunos comandos básicos para comprobar que todo este correcto.

```cmd
 node -v  
 ``` 
   
```cmd 
 nmp -v
 ``` 
 Para correr la aplicación se debe tener abierta la carpeta de android en *Android Studio*, abrir un dispositivo virtual y ejecutar el siguiente comando:
 
 ```cmd
 
 npm run android
 
 ``` 
## Versiones Utilizadas

- *Node v16.2.0*
- *NPM v7.13.0*
- *React Native v0.64.1*
- *React Native Cli v2.0.1*
- *Android Studio v4.2.1*
- *Android 11*  
  
## Imagenes de la Aplicación  
  
  
![image](https://user-images.githubusercontent.com/83682738/119683907-af4d6480-be09-11eb-9122-e212ce38881a.png)  
  
  
  
  
![image](https://user-images.githubusercontent.com/83682738/119684114-da37b880-be09-11eb-83a3-f5c958852405.png)  
  
  
  
  
![image](https://user-images.githubusercontent.com/83682738/119684521-2edb3380-be0a-11eb-9c47-cd3741a5cba0.png)  
  
  
  
  
![image](https://user-images.githubusercontent.com/83682738/119684584-3dc1e600-be0a-11eb-8d8a-4c42a8582cba.png)  
  






