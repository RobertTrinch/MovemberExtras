export interface MovemberMember {
    id: number;
    firstName: string;
    lastName: string;
    fullName: string;
    targetAmount: number;
    AmountRaised: {
        originalAmount: number;
        originalCurrencySymbol: string;
    };
    ProfilePicture: {
        defaultURL: string;
    };
}
