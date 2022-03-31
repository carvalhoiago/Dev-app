import axios from 'axios';

export const sendAdoptNotification = (userName, animalName, deviceId) => {
  axios.post('https://onesignal.com/api/v1/notifications', 
  {
    "app_id": "4289c303-3df9-4095-8792-c55f552d235b",
    "include_player_ids": [deviceId],
    "headings": {"en": `${userName} quer adotar ${animalName}!`},
    "contents": {"en": "Toque para mais informações..."}
  }, 
  {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Basic OWQ2NmU2ZGItMmM3NC00YmZkLThkYzgtY2U3M2U1YzY5ZTMw'
    }
  }).then(() => console.log('mensagem enviada com sucesso'))
}