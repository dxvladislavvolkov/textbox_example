import {
    Component,
    NgModule,
    ElementRef,
    NgZone,
    Input,
    Output,
    OnDestroy,
    Injector,
    EventEmitter,
    AfterContentInit,
    Renderer2,
    ContentChild,
    ChangeDetectorRef,
    forwardRef,
    ViewChild,
    HostListener
} from '@angular/core';

import * as $ from "jquery";

import {
    ControlValueAccessor,
    NG_VALUE_ACCESSOR,
    NgModel
} from '@angular/forms';

const CUSTOM_VALUE_ACCESSOR_PROVIDER = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TextBoxComponent),
    multi: true
};

@Component({
    selector: 'text-box',
    template: '<input class="input" type="text"/>',
    providers: [
        CUSTOM_VALUE_ACCESSOR_PROVIDER
    ]
})
export class TextBoxComponent  implements ControlValueAccessor {
    _value: string;
    _isValid: boolean;

    @ViewChild(NgModel) model: NgModel;

    @Input()
    get value(): string {
        return this._getOption('value');
    }
    set value(value: string) {
        this._setOption('value', value);
    }

    @Input()
    get isValid(): string {
        return this._getOption('isValid');
    }
    set isValid(value: string) {
        this._setOption('isValid', value);
    }

    @Output() valueChange: EventEmitter<string> = new EventEmitter();

    @HostListener('valueChange', ['$event']) change(_) {}
    @HostListener('blur', ['$event']) touched = () => {};

    constructor(private elRef: ElementRef, private renderer: Renderer2) {

    }

    registerOnTouched(fn: any): void {
        this.touched = fn;
    }

    registerOnChange(fn: (_: any) => void): void {
        this.change = fn;
    }

    writeValue(value: any): void {
        //setTimeout(() => {
            this.value = value
        //}, 0);
    }

    private _getOption(value: string) {
        return this._value;
    }

    private _setOption(name: string, value: any) {
        if(name === "value") {
            this.elRef.nativeElement.children[0].value = value;

            if(value !== "") {
                this.valueChange.emit(value);
            }
        } else {
             this._isValid = value;
        }
    }
}


@NgModule({
  imports: [
      TextBoxModule
  ],
  declarations: [
    TextBoxComponent
  ],
  exports: [
    TextBoxComponent
  ]
})
export class TextBoxModule { }