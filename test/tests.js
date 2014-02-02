var assert = chai.assert;

suite('temperatura', function () {

	test('23F = -5C', function () {
		escritura.value = "23F";
		calcularTemp();
		assert.deepEqual(salida.innerHTML, "-5.0 Celsius");
	} );

	test('45C = 113.0F', function () {
		escritura.value = "45C";
		calcularTemp();
		assert.deepEqual(salida.innerHTML, "113.0 Farenheit");
	});

	test('5X = ERROR', function () {
		escritura.value = "44G";
		calcularTemp();
		assert.match(salida.innerHTML, /ERROR/);
	});

});