import Magician from "../class/magician";

test('Проверка атаки', () => {
  const mag = new Magician('Jhonny');
  expect(mag.name).toBe('Jhonny');

  mag.attack = 100;
  mag.stoned = false;
  mag.distance = 1;
  expect(mag.attack).toBe(100);

  mag.attack = 100;
  mag.stoned = false;
  mag.distance = 2;
  expect(mag.attack).toBe(90);

  mag.attack = 100;
  mag.stoned = false;
  mag.distance = 3;
  expect(mag.attack).toBe(80);

  mag.attack = 100;
  mag.stoned = true;
  mag.distance = 1;
  expect(mag.attack).toBe(100);

  mag.attack = 100;
  mag.stoned = true;
  mag.distance = 2;
  expect(mag.attack).toBe(85);


  mag.attack = 100;
  mag.stoned = true;
  mag.distance = 3;
  expect(mag.attack).toBe(72.075);
});
