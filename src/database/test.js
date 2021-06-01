const Database = require('./db');
const saveOrphanage = require('./saveOrphanage')

Database.then(async db => {
    // Inserir dados na tabela.
    await saveOrphanage(db, {
        lat: "-8.757838",
        lng: "-63.872517",
        name: "Lar dos meninos",
        about: "Presta assistência à crianças de 06 a 15 anos que se encontre em situaçao de risco e/ou vulnerabilidade social.",
        whatsapp: "98989878972",
        images: [
            "https://images.unsplash.com/photo-1613742743080-a59851f3008d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE3NjU0NDMx&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",

            "https://images.unsplash.com/photo-1613243556956-4946e3189a3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE3NjU0NDMw&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor para todos.",
        opening_hours: "Horário de visitas Das 18h até 8h",
        open_on_weekends: "0"
    })

    // Consutar dados da tabela
    const selectedOrphanages = await db.all('SELECT * FROM orphanages')
    console.log(selectedOrphanages)

    /*// Consultar somente 1 orphanato pelo id.
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "1"')
    console.log(orphanage)

    // Deletar dado da tabela.
    console.log(await db.run("DELETE FROM orphanages WHERE id = '2'"))
    console.log(await db.run("DELETE FROM orphanages WHERE id = '3'"))*/
})