'use strict';

describe('The main view', function () {
  var page;

  beforeEach(function () {
    browser.get('http://localhost:3333/#');
  });

  it('deberia iniciar con 3 cosas hechas y por hacer', function() {
    var li = element.all(by.css('li'));
    expect(li.count()).toEqual(3)
  });

  it('la segunda cosa por hacer debe estar inicialmente tachada (clase bold)', function() {
    var elem = element.all(by.css('label'));
    expect(elem.get(1).getAttribute('class')).toMatch('tachado')
  });

  it('deberia agregar un nuevo item a la lista', function() {
    var elem = element.all(by.model('main.cosaNueva'));
    elem.sendKeys('blas');
    elem.sendKeys(protractor.Key.ENTER);
    expect(element.all(by.css('li')).count()).toEqual(4);
  });

  it('deberia tachar un elem al hacer clic', function() {
    var elem = element.all(by.css('label')).get(0);
    elem.click();
	expect(elem.getAttribute('class')).toMatch('tachado');
  });



});

// describe('angularjs homepage todo list', function() {
//   it('should add a todo', function() {
//     browser.get('https://angularjs.org');

//     element(by.model('todoList.todoText')).sendKeys('write first protractor test');
//     element(by.css('[value="add"]')).click();

//     var todoList = element.all(by.repeater('todo in todoList.todos'));
//     expect(todoList.count()).toEqual(3);
//     expect(todoList.get(2).getText()).toEqual('write first protractor test');

//     // You wrote your first test, cross it off the list
//     todoList.get(2).element(by.css('input')).click();
//     var completedAmount = element.all(by.css('.done-true'));
//     expect(completedAmount.count()).toEqual(2);
//   });
// });