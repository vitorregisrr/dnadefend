var rnaM = {
    rnaT: new Array(),

    amnoacidos: new Array(),

    gen: function (e) {
        console.log(e)

        //gera os conectores
        this.conectores = game.add.group();
        var pConectores = [64, 160, 253, 352, 448, 544, 639];
        for(x = 0; x <= 6; x++){
            this.conectores.create(pConectores[x], 170, 'parT-conector');
            this.conectores.getAt(x).height = 73;
            this.conectores.getAt(x).width = 8;
            this.conectores.getAt(x).alpha = 0;
        }

        //muda o valor das fitas para correção de acordo com a opção gerada aleatoriamente
        //rna t = rnaT correto, para corrigir com a entrada
        //mesmo para os amnoacidos
        switch (e) {
            case 1:
                this.fita = game.add.sprite(25, 150, 'rnaM1');
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
                this.rnaTC = ['u', 'a', 'c', 'a', 'c', 'c','u', 'g', 'a','c', 'u', 'u','g', 'g', 'g','c', 'g', 'u','g', 'a', 'g','a', 'c', 'c']
                this.aminoacidos = ['metionina', 'triptofano', 'treomina', 'acido-glutaminico', 'prolina', 'alanina', 'leucina', 'triptofano'];
                this.aminoacidos = [0, 1, 2, 3, 4, 5, 6, 1];
                break;

            case 2:
                this.fita = game.add.sprite(25, 150, 'rnaM2');
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
                this.rnaTC = ['u', 'a', 'c','c', 'u', 'u','u', 'g', 'a','g', 'g', 'g','a', 'c', 'c','g', 'a', 'g','c', 'g', 'u','u', 'g', 'a'];
                this.aminoacidos = ['metionina', 'acido-glutaminico', 'treomina', 'prolina', 'triptofano', 'leucina', 'alanina', 'treomina'];
                this.aminoacidos = [0, 3, 2, 4, 1, 6, 5, 2];
                break;

            case 3:
                this.fita = game.add.sprite(25, 150, 'rnaM3');
                this.rnaT = [
                    ['u', 'a', 'c'],
                    ['c', 'g', 'u'],
                    ['c', 'u', 'u'],
                    ['g', 'a', 'g'],
                    ['a', 'c', 'c'],
                    ['g', 'a', 'g'],
                    ['u', 'a', 'g'],
                    ['g', 'g', 'g']
                ];
                this.rnaTC = ['u', 'a', 'c','c', 'g', 'u','c', 'u', 'u','g', 'a', 'g','a', 'c', 'c','g', 'a', 'g','u', 'a', 'g','g', 'g', 'g']
                this.aminoacidos = ['metionina', 'alanina', 'acido-glutaminico', 'leucina', 'triptofano', 'prolina', 'treomina', 'prolina'];
                this.aminoacidos = [0, 5, 3, 6, 1, 4, 2, 4];
                break;
        }
    }
}