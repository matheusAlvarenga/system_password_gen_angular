import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    length = 0;

    password = '';

    useLetters = false;

    useNumbers = false;

    useSymbols = false;

    handleButtonClick() {
        const teste = '123';
        const letters = 'abcdefghijklmnopqrstuvwxyz';
        const symbols = '!@#$%*()_+-./[]={}?><';

        let validChars = '';

        if (this.useLetters) {
            validChars += letters;
        }

        if (this.useNumbers) {
            validChars += teste;
        }

        if (this.useSymbols) {
            validChars += symbols;
        }

        let generatedPassword = '';

        for (let i = 0; i < this.length; i += 1) {
            const index = Math.floor(Math.random() * validChars.length);

            generatedPassword += validChars[index];
        }

        this.password = generatedPassword;
    }

    handleLength(text: string) {
        const parsed = parseInt(text, 10);

        // eslint-disable-next-line no-restricted-globals
        if (!isNaN(parsed)) {
            this.length = parsed;
        }
    }

    handleLetters() {
        this.useLetters = !this.useLetters;
    }

    handleNumbers() {
        this.useNumbers = !this.useNumbers;
    }

    handleSymbols() {
        this.useSymbols = !this.useSymbols;
    }
}
