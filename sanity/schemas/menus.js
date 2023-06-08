const category = [
    {title: "veggy", value: "VG"},
    {title: "steaky", value: "ST"},
    {title: "feast", value: "FE"}
]

export default {
    name:'menus',
    title:'Menu',
    type:'document',
    fields:[
        {
            name:'name',
            title:'Name',
            type:'string'
        },
        {
            name:'ingredients',
            title:'Ingredients',
            type:'string'
        },
        {
            name:'price',
            title:'Price',
            type:'number'
        },
        {
            name:'rating',
            title:'Rating',
            type:'number'
        },
        {
            title: 'category',
            name: 'Category',
            type: 'string',
            options: {
              list: [
                ...category
              ],
            }
          },
        {
            name: 'img',
            title: 'Img',
            type: 'image',
            options: {
              hotspot: true,
            },
          },
    ]
}