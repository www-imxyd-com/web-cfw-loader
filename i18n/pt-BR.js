let ptBR = {
  "pageTitle"    : "Nintendo Switch Payload Loader",
  "pageSubtitle" : "Fusee Launcher portado para JavaScript usando WebUSB.",
  "dangerDanger"   :"Esta ferramenta não foi completamente testada. Apesar de não ter encontrado nenhuma falha, não me responsabilizo se algo der errado!",
  "warningWindows" :"Isto NÃO funciona no Windows devido uma limitação do Chrome na implementação do WebUSB (e, possivelmente, outros motivos).",
  "warningBrowser" :"Isto NÃO funciona, atualmente, em nenhum browser além do Chrome, que é o único a implementar WebUSB.",
  "warningLinux"   :"No Linux você pode receber um erro de 'Acesso Negado' ou de 'Dispositivo Compatível não Encontrado'! Caso receba, tente criar o arquivo <code>/etc/udev/rules.d/50-switch.rules</code> com o seguinte conteúdo: <br><code>SUBSYSTEM==\"usb\", ATTR{idVendor}==\"0955\", MODE=\"0664\", GROUP=\"plugdev\"</code>",
  "warningTested"  :"Isto foi testado -e aparentemente funciona- no Linux, OSX, Android (sem precisar de root) e Chromebooks. Resultados podem variar.",
  "labelInstructions" :"Instruções:",
  "liRCM"          :"Coloque o Switch no modo RCM e conecte-o ao dispositivo.",
  "liSelect"       :"Escolha um dos payloads disponíveis ou faça upload de um.",
  "liPress"        :"Clique em 'Enviar Payload'!",
  "liAPX"          :"No diálogo de confirmação escolha 'APX' e clique em 'Conectar-se'",
  "liLaunch"       :"Se tudo der certo, o payload executará!",
  "h1SetupDelivery" :"Configurar Entrega de Payload",
  "h4SelectPayload" :"Payload:",
  "optionCTCaerHekate" :"CTCaer's Hekate Mod v3.0 (All Firmwares)",
  "optionFusee"     :"Payload de teste (Re)Switched (fusee)",
  "optionSXOS"      :"SX OS (All Firmwares)",
  "optionUpload"    :"Carregar Payload",
  "h4GetByteArray"  :"Recuperar array de bytes do payload (favor não exploitar)",
  "goButton"        :"Enviar Payload!",
  "clearlogsbutton" :"Limpar Logs",
  "disclaimer1" :'Código fonte disponível em <a href="https://github.com/ElijahZAwesome/web-cfw-loader/">GitHub</a> (ou simplesmente clicando "ver código", não há backend).',
  "disclaimer2" :'Um port do <a href="https://github.com/reswitched/fusee-launcher">fusee-launcher</a>.',
  "disclaimer3" :'Muito obrigado a Ktemkin e time (Re)Switched, bem como <br><a href="https://atlas44.s3-us-west-2.amazonaws.com/web-fusee-launcher/index.html">Atlas44 e seu website</a> que é a base deste.',
  "disclaimer4" :'Por último, obrigado <a href="https://github.com/falquinho">falquinho</a> pelo novo layout Bootstrap e tradução para português, <a href="https://github.com/thomleg50">thomleg50</a> pela tradução para francês, <a href="https://github.com/Filo97">Filo97</a> pela tradução para italiano, <a href="https://github.com/tumGER">tumGER</a> pela tradução para alemão, <a href="https://github.com/lordfriky">Lord_Friky</a> pela tradução para espanhol, e <a href="https://github.com/lorek123">Lorek</a> pela tradução para polonês.'
}
