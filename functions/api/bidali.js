async function gatherResponse(response) {
  const { headers } = response;
  const contentType = headers.get('content-type') || '';
  if (contentType.includes('application/json')) {
    return JSON.stringify(await response.json());
  } else if (contentType.includes('application/text')) {
    return response.text();
  } else if (contentType.includes('text/html')) {
    return response.text();
  } else {
    return response.text();
  }
}


async function handleRequest({context, env}) {
    try {
        let statusMsg;
        let input = await context.request.formData();
        let to = env.CONTACT_FORM_TO;
        let name = "Arbide"
        let subject = "Mezu berria webgunetik" 
        let mezua = `
        Nork: ${input.izena}
        Emaila: ${input.email}
        Mezua: ${input.mezua}
        `
        let res = await fetch("https://api.sendgrid.com/v3/mail/send", {
            method: "POST",
            headers: {
              Authorization: "Bearer " + env.sendgrid_api_key
            },
            body: JSON.stringify({
                personalizations: {
                  to: [{email: to, name: name}],
                  subject: subject,
                  content: [{
                    type: "text/plain",
                    value: mezua
                  }],
                  from: {email: "ez-erantzun@arbide.eus", name: "ez-erantzun"},
                  reply_to: {email: "ez-erantzun@arbide.eus", name: "ez-erantzun"}
                }
              })
            })
        let result = await gatherResponse()
        if (result.ok){
          statusMsg="Mezua ondo bidali da"
        } else {
          statusMsg="Errorea bidalketan. " + result.status
        }
        return new Response(statusMsg, {
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
          },
        });
      } catch (err) {
        return new Response('Error parsing JSON content', { status: 400 });
      }
    
  }
  addEventListener('fetch', (event, context, env) => {
    return event.respondWith(handleRequest({context, env}));
  });
  