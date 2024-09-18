const { select } = require('@inquirer/prompts')


const start = async () => {
     
    while(true){

        const opcao = await select({
            message : "Menu",
            choices : [
                {
                    name: "Cadastrar meta",
                    value: "Cadastrar"
                },
                {
                    name: "Listar metas",
                    value: "listar"
                },
                {
                    name: "sair",
                    value: "sair"
                }
            ]
        })
    
        switch(opcao) {
            case "Cadastrar":
                console.log("vamos cadastrar")
                break
            case "listar":
                console.log("vamos listar")
                break
            case "sair":
                console.log("Até a próxima!")
                return

        }
    }
}

start()

//while