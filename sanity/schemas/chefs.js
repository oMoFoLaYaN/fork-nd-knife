export default {
    name:'chefs',
    title:'Chefs',
    type: 'document',
    fields:[
        { 
            name:'name',
            title:'Name',
            type: 'string'
        },
        {
            name:'role',
            title:'Role',
            type:'string'
        },
        {
            name:'img',
            title:'Img',
            type: 'image',
            options: {
              hotspot: true,
            },
        }
    ]
}