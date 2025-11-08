export interface MovemberPost {
    id: number;
    created: string;
    viewtype: string; // tells us if its a post or donation
    metadata: {
        id: number;
        currency_symbol: string;
        amount: number;
        anonymous: boolean;
        donor: {
            name: string;
            image: string;
        }
        message: string;
        isHidden: boolean;
    }
}
