let tarefas = []

while (true) {
    const acao = prompt("Escolha uma ação:\n1 - Adicionar tarefa\n2 - Remover tarefa\n3 - Listar tarefas\n4 - Concluir tarefa\n5 - Sair")

    switch (acao) {
        case "1":
            const novaTarefa = prompt("Digite o nome da tarefa:")
            tarefas.push(novaTarefa)
            alert(`Tarefa "${novaTarefa}" adicionada à lista.`)
            break

        case "2":
            const indiceRemover = parseInt(prompt("Digite o índice da tarefa que deseja remover (começa em 0):"))
            if (indiceRemover >= 0 && indiceRemover < tarefas.length) {
                const tarefaRemovida = tarefas.splice(indiceRemover, 1)
                alert(`Tarefa "${tarefaRemovida}" removida da lista.`)
            } else {
                alert("Índice inválido. Tente novamente.")
            }
            break

        case "3":
            if (tarefas.length === 0) {
                alert("Nenhuma tarefa na lista.")
            } else {
                let listaExibicao = "Lista de tarefas:\n"
                for (const [indice, tarefa] of tarefas.entries()) {
                    listaExibicao += `${indice}: ${tarefa}\n`
                }
                alert(listaExibicao)
            }
            break

        case "4":
            const indiceConcluir = parseInt(prompt("Digite o índice da tarefa que deseja concluir (começa em 0):"))
            if (indiceConcluir >= 0 && indiceConcluir < tarefas.length) {
                tarefas[indiceConcluir] = `✅ ${tarefas[indiceConcluir]}`
                alert(`Tarefa "${tarefas[indiceConcluir]}" marcada como concluída.`)
            } else {
                alert("Índice inválido. Tente novamente.")
            }
            break

        case "5":
            alert("Encerrando o programa. Até mais!")
            break

        default:
            alert("Opção inválida. Escolha entre 1 e 5.")
    }

    if (acao === "5") break
}