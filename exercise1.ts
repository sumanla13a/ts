
type bankAccountType = {
	money: number,
	deposit: (number) => void
};

type myselfType = {
	name: string,
	bankAccount: bankAccountType,
	hobbies: string[]
};

let bankAccount: bankAccountType = {
	money: 2000,
	deposit: function (value) {
		this.money += value;
	}
};

let myself = {
	name: 'Suman',
	bankAccount: bankAccount,
	hobbies: ['Gaming', 'Dancing']
}

myself.bankAccount.deposit(3000);

console.log(myself);
