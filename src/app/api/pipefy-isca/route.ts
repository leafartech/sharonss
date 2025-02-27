import { NextResponse } from "next/server";

export async function POST(request: Request) {

    const data = await request.json()

    const pipefy_token = 'eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJQaXBlZnkiLCJpYXQiOjE3Mzc4MzcyNzksImp0aSI6IjAyZDFjOWM4LWM2ZWQtNDlhYS04NGM0LTcwOGQ2Y2RhMTVmMiIsInN1YiI6MzAyNTczOTM0LCJ1c2VyIjp7ImlkIjozMDI1NzM5MzQsImVtYWlsIjoib25saW5lcGVyc2V2ZXJlQGdtYWlsLmNvbSJ9fQ.9HYXSbv8nOAUmFnz46YVKi86rd6IkFMSmfeZtECj7VPywqe8S2tHSCxWTqEkG24N3-NCcWu8rjt1-YC-R5gGpA'
    const pipe_id = '303356561'

    if (data.isca) {

        await fetch(`https://hook.us1.make.com/zbxslc34hzygvye68c98xkgtqoejmb2u`, {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
    }

    await fetch(`https://api.pipefy.com/graphql`, {
        method: 'POST',
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${pipefy_token}`
        },
        body: JSON.stringify({
            query: `
                mutation {
                    createCard(input: {
                        pipe_id: ${pipe_id},
                        title: "${data.name}",
                        fields_attributes: [
                            { field_id: "nome", field_value: "${data.name + ' - live'}" },  
                            { field_id: "email", field_value: "${data.email}" },
                            { field_id: "contato_telefonico", field_value: "${data.phone}" }
                            { field_id: "telefone", field_value: "${data.phone}" }
                            { field_id: "faturamento_mensal", field_value: "${data.monthly_income}" }
                            { field_id: "faixa_de_faturamento", field_value: "${data.monthly_income}" }
                            { field_id: "momento_atual", field_value: "${data.current_moment}" }
                            { field_id: "utm_source", field_value: "${data.utm_source}" }
                            { field_id: "copy_of_copy_of_utm_source", field_value: "${data.utm_campaign}" }
                            { field_id: "copy_of_utm_source", field_value: "${data.utm_medium}" }
                            { field_id: "copy_of_utm_term", field_value: "${data.utm_content}" }
                            { field_id: "copy_of_copy_of_copy_of_utm_source", field_value: "${data.utm_term}" }    
                            { field_id: "funil", field_value: "${data.funil}" }                          
                        ],
                    }) {
                        card {
                            id
                            title
                        }
                    }
                }
            `,
        }),
    }).then(async res => {

        const response = await res.json()

    }).catch(e => console.log(e))

    return NextResponse.json({})
}
