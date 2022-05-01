import axios from 'axios';

export const sendAdoptNotification = (
    userName,
    animalName,
    deviceId,
    adoptionRequestId,
  ) => {
  axios.post('https://onesignal.com/api/v1/notifications', 
  {
    "app_id": "4289c303-3df9-4095-8792-c55f552d235b",
    "include_player_ids": [deviceId],
    "headings": {"en": `${userName} quer adotar ${animalName}!`},
    "contents": {"en": "Toque para mais informações..."},
    "url": `com.carvalhoiago.meau://adoptrequest/${adoptionRequestId}`,
  }, 
  {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Basic OWQ2NmU2ZGItMmM3NC00YmZkLThkYzgtY2U3M2U1YzY5ZTMw'
    }
  }).then(() => console.log('notificação de solicitação de adoção enviada com sucesso'))
}

export const sendRejectAdoptNotification = (
  animalName,
  deviceId,
) => {
axios.post('https://onesignal.com/api/v1/notifications', 
{
  "app_id": "4289c303-3df9-4095-8792-c55f552d235b",
  "include_player_ids": [deviceId],
  "headings": {"en": `O dono do ${animalName} rejeitou a adoção!`},
  "contents": {"en": "Se lascou kkkkkkkkk..."},
}, 
{
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Basic OWQ2NmU2ZGItMmM3NC00YmZkLThkYzgtY2U3M2U1YzY5ZTMw'
  }
}).then(() => console.log('notificação de rejeição de adoção enviada com sucesso'))
.catch(e => console.log(e))
}

export const sendAceptAdoptNotification = (
  animalName,
  deviceId,
) => {
axios.post('https://onesignal.com/api/v1/notifications', 
{
  "app_id": "4289c303-3df9-4095-8792-c55f552d235b",
  "include_player_ids": [deviceId],
  "headings": {"en": `O dono do ${animalName} aceitou a adoção!`},
  "contents": {"en": "Toque para ver seus pets..."},
  "url": `com.carvalhoiago.meau://mypets`,
}, 
{
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Basic OWQ2NmU2ZGItMmM3NC00YmZkLThkYzgtY2U3M2U1YzY5ZTMw'
  }
}).then(() => console.log('notificação de solicitação de adoção enviada com sucesso'))
}

export const sendMessageNotification = (
  userName,
  message,
  chatId,
  deviceId,
) => {
  console.log('nome:', userName, 'mensagem:',
  message, 'chat',
  chatId,  'device',
  deviceId,)
axios.post('https://onesignal.com/api/v1/notifications', 
{
  "app_id": "4289c303-3df9-4095-8792-c55f552d235b",
  "include_player_ids": [deviceId],
  "headings": {"en": `Mensagem de ${userName}:`},
  "contents": {"en": `${message}`},
  "url": `com.carvalhoiago.meau://chat/${chatId}`,
}, 
{
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Basic OWQ2NmU2ZGItMmM3NC00YmZkLThkYzgtY2U3M2U1YzY5ZTMw'
  }
}).then(() => console.log('notificação de mensagem enviada com sucesso'))
.catch(e=>console.log('erro notificação', e))
}