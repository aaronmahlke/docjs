function Element(_elem) {
	this.elem = elem;
}

Element.prototype.addClass = function(_class) {
	this.elem.classList.add(_class);
};

Element.prototype.get = function() {
	return this.elem;
}
