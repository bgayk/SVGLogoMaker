const { iif } = require("rxjs");

class Shape {
    constructor(shapeType, shapeColor='blue', userText='undefined', userTextColor='white') {
      this.shapeType = shapeType;
      this.shapeColor = shapeColor;
      this.userText = userText;
      this.userTextColor = userTextColor;
    }

    renderOpenTag() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`  + `\n` ;
    };

    renderCloseTag() {
        return '</svg>' + `\n`;
    };

    renderText() {
        return `\t` + `<text x="150" y="100" text-anchor="middle" fill="${this.userTextColor}">${this.userText}</text>` + `\n`;   
    };
}
  

    class Square extends Shape {
        constructor(shapeType, shapeColor, userText, userTextColor,
                    shapeX, shapeY, shapeWidth, shapeHeight, shapeRx, shapeRy) {
            super(shapeType, shapeColor, userText, userTextColor),
            this.shapeX = 0,
            this.shapeY = 0,
            this.shapeWidth = 300, // width and height are the same for a square
            this.shapeHeight = 300,
            this.shapeRx = 0,
            this.shapeRy = 0;
        }
        render() {
            return `<rect x="${this.shapeX}" y="${this.shapeY}" width="${this.shapeWidth}" height="${this.shapeHeight}" rx="${this.shapeRx}" ry="${this.shapeRy}" fill="${this.shapeColor}" />`  + `\n`;
        };
    };
    

    class Circle extends Shape {
        constructor(shapeType, shapeColor, userText, userTextColor,
                    shapeR, shapeCX, shapeCY) {
            super(shapeType, shapeColor, userText, userTextColor);
            this.shapeR = 80,
            this.shapeCX = 150,
            this.shapeCY = 100;
        }
        render() { 
            return `<circle cx="${this.shapeCX}" cy="${this.shapeCY}" r="${this.shapeR}" fill="${this.shapeColor}"/>`  + `\n`;  
        };
    }

    class Triangle extends Shape {
        constructor(shapeType, shapeColor, userText, userTextColor,
                    shapePoints) {
            super(shapeType, shapeColor, userText, userTextColor);
            this.shapePoints = `150, 18 244, 182 56, 182`;
        }
        render() {
            return `\t` + `<polygon points="${this.shapePoints}" fill=${this.shapeColor} ;" />`  + `\n`;   
        };
    }


    function generateSVGData(response) {
        let data = '';
    
        if (response.logoShape === 'Square') {
            const Sq = new Square(response.logoShape, response.logoShapeColor, response.logoText, response.logoTextColor);
            data += Sq.renderOpenTag();
            data += Sq.render();
            data += Sq.renderText();
            data += Sq.renderCloseTag();    
        }
        else if (response.logoShape === 'Circle') {
            const Ci = new Circle(response.logoShape, response.logoShapeColor, response.logoText, response.logoTextColor);
            data += Ci.renderOpenTag();
            data += Ci.render();
            data += Ci.renderText();ß
            data += Ci.renderCloseTag();    
        }
        else if (response.logoShape === 'Triangle') {
            const Tr = new Triangle(response.logoShape, response.logoShapeColor, response.logoText, response.logoTextColor);
            data += Tr.renderOpenTag();
            data += Tr.render();
            data += Tr.renderText();
            data += Tr.renderCloseTag();    
        }

        return data;
    }

    module.exports = {Circle, Triangle, Square, generateSVGData};

