import { NextResponse } from "next/server";

export async function POST(request: Request) {

    const data = await request.json()

    const pipefy_token = 'eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJQaXBlZnkiLCJpYXQiOjE3Mzc4MzcyNzksImp0aSI6IjAyZDFjOWM4LWM2ZWQtNDlhYS04NGM0LTcwOGQ2Y2RhMTVmMiIsInN1YiI6MzAyNTczOTM0LCJ1c2VyIjp7ImlkIjozMDI1NzM5MzQsImVtYWlsIjoib25saW5lcGVyc2V2ZXJlQGdtYWlsLmNvbSJ9fQ.9HYXSbv8nOAUmFnz46YVKi86rd6IkFMSmfeZtECj7VPywqe8S2tHSCxWTqEkG24N3-NCcWu8rjt1-YC-R5gGpA'
    const pipe_id = '305675089'

    // await fetch(`https://app.pipefy.com/pipes/${pipe_id}`, {
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
                            { field_id: "name", field_value: "${data.name}" },
                            { field_id: "email", field_value: "${data.email}" },
                            { field_id: "phone", field_value: "${data.phone}" }
                            { field_id: "montlhy_income", field_value: "${data.monthly_income}" }
                            { field_id: "current_moment", field_value: "${data.current_moment}" }
                            { field_id: "utm_source", field_value: "${data.utm_source}" }
                            { field_id: "utm_campaign", field_value: "${data.utm_campaign}" }
                            { field_id: "utm_medium", field_value: "${data.utm_medium}" }
                            { field_id: "utm_content", field_value: "${data.utm_content}" }
                            { field_id: "utm_term", field_value: "${data.utm_term}" }
                        ]
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

        console.log(response)

    }).catch(e => console.log(e))

    return NextResponse.json({})
} 