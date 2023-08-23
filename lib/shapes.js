
class Shape {
    constructor(shapeType, shapeColor='blue', userText='undefined', userTextColor='white') {
      this.shapeType = shapeType;
      this.shapeColor = shapeColor;
      this.userText = userText;
      this.userTextColor = userTextColor;
    }

    renderOpenTag() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`;
    };

    renderCloseTag() {
        return '</svg>';
    };

    renderText() {
        return `<text x="150" y="100" text-anchor="middle" fill="${this.userTextColor}">${this.userText}</text>`;   
    };

    setColor(color) {
        this.shapeColor = color;
    }

    setTextColor(color) {
        this.userTextColor = color;
    }

    setText(text) {
        this.userText = text;
    }    
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
            return `<rect x="${this.shapeX}" y="${this.shapeY}" width="${this.shapeWidth}" height="${this.shapeHeight}" rx="${this.shapeRx}" ry="${this.shapeRy}" fill="${this.shapeColor}" />`;
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
            return `<circle cx="${this.shapeCX}" cy="${this.shapeCY}" r="${this.shapeR}" fill="${this.shapeColor}"/>`;  
        };
    }

    class Triangle extends Shape {
        constructor(shapeType, shapeColor, userText, userTextColor,
                    shapePoints) {
            super(shapeType, shapeColor, userText, userTextColor);
            this.shapePoints = `150, 18 244, 182 56, 182`;
        }
        render() {
            return `<polygon points="${this.shapePoints}" fill="${this.shapeColor}" />`;   
        };
    }


    function generateSVGData(response) {
        let data = '';
    
        if (response.logoShape === 'Square') {
            const Sq = new Square(response.logoShape, response.logoShapeColor, response.logoText, response.logoTextColor);
            data += Sq.renderOpenTag() + '\n';
            data += '\t' + Sq.render() + '\n';
            data += '\t' + Sq.renderText() + '\n';
            data += Sq.renderCloseTag() + '\n';    
        }
        else if (response.logoShape === 'Circle') {
            const Ci = new Circle(response.logoShape, response.logoShapeColor, response.logoText, response.logoTextColor);
            data += Ci.renderOpenTag() + '\n';
            data += '\t' + Ci.render() + '\n';
            data += '\t' + Ci.renderText() + '\n';
            data += Ci.renderCloseTag() + '\n';    
        }
        else if (response.logoShape === 'Triangle') {
            const Tr = new Triangle(response.logoShape, response.logoShapeColor, response.logoText, response.logoTextColor);
            data += Tr.renderOpenTag() + '\n';
            data += '\t' + Tr.render() + '\n';
            data += '\t' + Tr.renderText() + '\n';
            data += Tr.renderCloseTag() + '\n';    
        }

        return data;
    }

    module.exports = {Circle, Triangle, Square, generateSVGData};

