import Daemon from "../class/daemon";

test('Проверка атаки', () => {
  const daemon = new Daemon('Don');
  expect(daemon.name).toBe('Don');

  daemon.attack = 100;
  daemon.stoned = false;
  daemon.distance = 1;
  expect(daemon.attack).toBe(100);

  daemon.attack = 100;
  daemon.stoned = false;
  daemon.distance = 2;
  expect(daemon.attack).toBe(90);

  daemon.attack = 100;
  daemon.stoned = false;
  daemon.distance = 3;
  expect(daemon.attack).toBe(80);

  daemon.attack = 100;
  daemon.stoned = true;
  daemon.distance = 1;
  expect(daemon.attack).toBe(100);

  daemon.attack = 100;
  daemon.stoned = true;
  daemon.distance = 2;
  expect(daemon.attack).toBe(85);


  daemon.attack = 100;
  daemon.stoned = true;
  daemon.distance = 3;
  expect(daemon.attack).toBe(72.075);
});
