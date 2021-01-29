const initialState = {
	img: null,
	img2: {},
};

function state_holder(state = initialState, action) {
	switch (action.type) {
		default:
			return state;
	}
}

export default state_holder;
