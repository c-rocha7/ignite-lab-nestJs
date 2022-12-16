import { SendNotification } from './send-notification';

describe('Envio de notificação', () => {
  it('Teste para verificar o envio da notificação', async () => {
    const sendNotification = new SendNotification();

    const { notification } = await sendNotification.execute({
      content: 'Isso é uma notificação',
      category: 'social',
      recipientId: 'example-send-notification',
    });

    expect(notification).toBeTruthy();
  });
});
