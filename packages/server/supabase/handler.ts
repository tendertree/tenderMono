const order = supabase.channel('채널명')
    .on('받는채널명',
        {
            event: '*',
            schema: 'public',
            table: '테이블명'
        },
        (event) => {
            const { new: newOrder } = event;
            orders.value = orders.value.map(order => {
                if (order.id === newOrder.id) {
                    return {
                        ...order,
                        ...newOrder
                    }
                }
                return order
            })
        }
    )
    .subscribe()


const { data, errro } = awiat supabse.rpc('increment', { row_id: '34234' })
try {
    if (data) { console.log("success") }
} catch (e) { console.log("e") }
}

