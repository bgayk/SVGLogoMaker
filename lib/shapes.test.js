const shapes = require('./shapes.js');

describe('Shapes', () => {
  describe('shape', () => {
    it('should render the expected text line', () => {
      const shape = new shapes.Shape();
      shape.setText('test');
      shape.setTextColor('blue');
      result = `<style> .logo{font: normal 30px sans-serif;} </style>` + '\n' +
      `\t` + `<text x="150" y="100" class="logo" text-anchor="middle" fill="blue">test</text>`;

      expect(shape.renderText()).toEqual(result);      
    });
  }); 
});

