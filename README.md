
# Azpiegiturei buruzko informazioa

Jarraian datorrena <https://arbide.eus>  webgunea eratzeko erabilitako zerbitzuen deskribapen bat da. Garapen apunte gisa idatzita dago.

## Arkitektura

### Webgunea

Webgunea publikatzeko Cloudflare-ren pages zerbitzua erabiltzen da ( <https://pages.cloudflare.com/> ). Zerbitzu honen bidartez hainbat JS framework erabiliz egindako webguneak publikatu daitezke, webgune honetarako Gatsby framework-a erabili da gatsby-starter-grayscale plantilarekin batera.

Branch bakoitzak bere url propioa jasotzen du eta main branch-ean egindako aldaketak (merge, push) zuzenean produkzioan publikatzen dira.

Cloudfalre Pages-ek funtzionatu dezan garapenaren repositorio publiko bat egon behar da github-n eta repositorio horren READMEA da hau.

Erabilitako Node bertsioa 14.15.0

### Kontaktu formularioaren bidalketa

Email bidalketa burutzeko Cloudflare Pages-ek eskaintzen dituen Functions aukera eta Sendgrid zerbitzua erabili dira.

Functions-en bidez serverless api bat sortzen da (funcitons direktorioan), eta api hori erabiliz kontaktu formularioa jaso eta Sendgrid-era bidaltzen da (REST api bidez) email banaketa egin dezan.

## Garapena

Behin dependentziak instalatuta "gatsby develop" komandoarekin lan ingurune lokala abiatuko da eta <http://localhost:8000> helbidean egongo da eskuragarri.

Ingurune aldagaiak .env.development fitxategian zehaztu behar dira INI formatuan
sendgrid_api_key
RECAPTCHA_KEY
CONTACT_FORM_TO
EMAIL_FROM

Functions ingurunea frogatzeko Cloudflarek wrangler erabiltzeko gomendatzen du. Ingurune hau egoki konfiguratzerik ez da lortu.