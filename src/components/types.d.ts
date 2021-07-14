interface MyPalette extends Window {
    sliderPanel: Panel & {
        slider: Slider;
        edittext: EditText;
    }
    bottomGroup: Group & {
        cancelButton: Button;
        applyButton: Button;
    }
}