
const Range = document.querySelector('#Range');
const Value = document.querySelector('#Value');
Range.max = 1000;
Range.min = 0;
Range.value = 500;
const off = Range.offsetWidth / (parseInt(Range.max) - parseInt(Range.min));

Value.innerHTML = Range.value;

Range.oninput  = () => {
    const px = ((Range.valueAsNumber - parseInt(Range.min)) * off) - (Value.offsetWidth / 2);
    Value.innerHTML = Range.value;
    Value.parentElement.style.left = px;
};
