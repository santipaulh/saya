const Assets = {
    methods: {
        isWhitelabel(): boolean {
            return false
        },
        toUsDollars(value: number): string {
            return new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD'
            }).format(value)
        }
    }
}

export default Assets
