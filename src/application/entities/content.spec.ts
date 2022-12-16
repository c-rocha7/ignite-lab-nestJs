import { Content } from './content';

describe('Teste de conteúdo da notificação', () => {
  it('Teste para verificar a criação de conteúdo para notificação', () => {
    const content = new Content('Você recebeu uma nova solicitação de amizade');

    expect(content).toBeTruthy();
  });

  it('Teste para verificar a criação de conteúdo para notificação com menos de 5 caracteres', () => {
    expect(() => new Content('Você')).toThrow();
  });

  it('Teste para verificar a criação de conteúdo para notificação com mais de 240 caracteres', () => {
    expect(() => new Content('a'.repeat(241))).toThrow();
  });
});
