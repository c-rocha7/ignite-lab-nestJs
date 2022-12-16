import { Content } from './content';
import { Notification } from './notification';

describe('Teste de criação de notificação', () => {
	it('Teste para verificar a criação da notificação', () => {
		const notification = new Notification({
			content: new Content('Nova solicitação de amizade'),
			category: 'social',
			recipientId: 'example-created-notification',
		});

		expect(notification).toBeTruthy();
	});
});
