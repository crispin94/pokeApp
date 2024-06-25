import { Component, Input } from "@angular/core";
import { PokemonDetails } from "../../models";

@Component({
  selector: "app-poke-details",
  templateUrl: "./poke-details.component.html",
})
export class PokeDetailsComponent {
  @Input() pokemonDetails?: PokemonDetails;
}

