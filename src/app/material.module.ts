import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatTreeModule } from '@angular/material';

@NgModule ({
    imports: [
        MatButtonModule, MatIconModule, MatTreeModule
        ],
    exports: [
        MatButtonModule, MatIconModule, MatTreeModule
    ]
})
export class MaterialModule{ }
