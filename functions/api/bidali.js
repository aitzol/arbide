export async function onRequestPost(context) {
  const {
    request, // same as existing Worker API
    env, // same as existing Worker API
    params, // if filename includes [id] or [[path]]
    waitUntil, // same as ctx.waitUntil in existing Worker API
    next, // used for middleware or to fetch assets
    data, // arbitrary space for passing data between middlewares
  } = context;
    try {
        let input = await request.json();
        let name = "Arbide"
        let subject = "Mezu berria webgunetik" 
        let mezua = `
        Nork: ${input.izena}
        Emaila: ${input.emaila}
        Mezua: ${input.mezua}
        `
        
        let res = await fetch("https://api.sendgrid.com/v3/mail/send", {
            method: "POST",
            headers: {
              Authorization: `Bearer ${env.sendgrid_api_key}`,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              personalizations:[{"to":[{"email":env.CONTACT_FORM_TO,"name":name}],"subject":subject}],
              content: [{"type": "text/plain", "value": mezua}],
              from: {email: env.EMAIL_FROM, name: "ez-erantzun"},
              reply_to: {email: env.EMAIL_FROM, name: "ez-erantzun"}
              })
            })
        
        return new Response(`Mezua bidali da ${res.status_code}`, {
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
          },
        });
      } catch (err) {
        return new Response(`${err.message}\n${err.stack}`, { 
          status: 400,
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
          },
        });
      }
    
  }
  