var rnaM = {
    rnaT: new Array(),

    amnoacidos: new Array(),

    gen: function (e) {

        //muda o valor das fitas para correção de acordo com a opção gerada aleatoriamente
        //rna t = rnaT correto, para corrigir com a entrada
        //mesmo para os amnoacidos
        switch (e) {
            case 1:
                this.fita = game.add.sprite(0, 0, 'rnaM1');
                this.rnaT = [
                    ['u', 'a', 'c'],
                    ['a', 'c', 'c'],
                    ['u', 'g', 'a'],
                    ['c', 'u', 'u'],
                    ['g', 'g', 'g'],
                    ['c', 'g', 'u'],
                    ['g', 'a', 'g'],
                    ['a', 'c', 'c']
                ];
                this.aminoacidos = ['metionina', 'triptofano', 'treomina', 'acido-glutaminico', 'prolina', 'alanina', 'leucina', 'triptofano'];
                break;

            case 2:
                this.fita = game.add.sprite(0, 0, 'rnaM2');
                this.rnaT = [
                    ['u', 'a', 'c'],
                    ['c', 'u', 'u'],
                    ['u', 'g', 'a'],
                    ['g', 'g', 'g'],
                    ['a', 'c', 'c'],
                    ['g', 'a', 'g'],
                    ['c', 'g', 'u'],
                    ['u', 'g', 'a']
                ];
                this.aminoacidos = ['metionina', 'acido-glutaminico', 'treomina', 'prolina', 'triptofano', 'leucina', 'alanina', 'treomina'];
                break;

            case 3:
                this.fita = game.add.sprite(0, 0, 'rnaM3');
                this.rnaT = [
                    ['u', 'a', 'c'],
                    ['c', 'g', 'u'],
                    ['c', 'u', 'u'],
                    ['g', 'a', 'g'],
                    ['a', 'c', 'c'],
                    ['g', 'g', 'g'],
                    ['u', 'a', 'g'],
                    ['g', 'g', 'g']
                ];
                this.aminoacidos = ['metionina', 'alanina', 'acido-glutaminico', 'leucina', 'triptofano', 'prolina', 'treomina', 'prolina'];
                break;
        }

        console.log(this.rnaT)
    }
}