//Visit the wiki for more info - https://kubejs.com/

ServerEvents.recipes(event => {
event.recipes.create.mixing('minecraft:diamond', 'minecraft:coal_block')


event.recipes.create.mixing(['confluence:raw_chlorophyte',CreateItem.of('confluence:raw_chlorophyte',0.25)], ['create:pulp', 'create:pulp','confluence:raw_chlorophyte']).heated()

event.recipes.create.mixing(Fluid.of('kubejs:ammo_reservation_potion',250), [Fluid.of('minecraft:water',250),'confluence:moonglow','confluence:pisces_fin_cod']).heated()
event.recipes.create.mixing(Fluid.of('kubejs:archery_potion',250), [Fluid.of('minecraft:water',250),'confluence:daybloom','confluence:lens']).heated()
event.recipes.create.mixing(Fluid.of('kubejs:battle_potion',250), [Fluid.of('minecraft:water',250),'confluence:deathweed','#confluence:evil_material']).heated()
//event.recipes.create.mixing(Fluid.of('kubejs:biome_sight_potion',250), [Fluid.of('minecraft:water',250),'confluence:moonglow','confluence:blinkroot','confluence:fireblossom','confluence:grass_seed','confluence:grass_seed','confluence:grass_seed','confluence:grass_seed','confluence:grass_seed']).heated()
event.recipes.create.mixing(Fluid.of('kubejs:builder_potion',250), [Fluid.of('minecraft:water',250),'confluence:blinkroot','confluence:shiverthorn','confluence:blinkroot']).heated()
event.recipes.create.mixing(Fluid.of('kubejs:calming_potion',250), [Fluid.of('minecraft:water',250),'confluence:damsel_fish','confluence:daybloom']).heated()
event.recipes.create.mixing(Fluid.of('kubejs:crate_potion',250), [Fluid.of('minecraft:water',250),'confluence:moonglow','confluence:shiverthorn','confluence:amber','confluence:waterleaf']).heated()
event.recipes.create.mixing(Fluid.of('kubejs:dangersense_potion',250), [Fluid.of('minecraft:water',250),'confluence:shiverthorn','minecraft:cobweb']).heated()
event.recipes.create.mixing(Fluid.of('kubejs:endurance_potion',250), [Fluid.of('minecraft:water',250),'confluence:blinkroot','confluence:armored_cave_fish']).heated()
event.recipes.create.mixing(Fluid.of('kubejs:featherfall_potion',250), [Fluid.of('minecraft:water',250),'confluence:daybloom','confluence:blinkroot','minecraft:feather']).heated()
event.recipes.create.mixing(Fluid.of('kubejs:fishing_potion',250), [Fluid.of('minecraft:water',250),'confluence:crispy_honey_block','confluence:waterleaf']).heated()
event.recipes.create.mixing(Fluid.of('kubejs:flipper_potion',250), [Fluid.of('minecraft:water',250),'confluence:shiverthorn','confluence:waterleaf']).heated()
event.recipes.create.mixing(Fluid.of('kubejs:gills_potion',250), [Fluid.of('minecraft:water',250),'confluence:waterleaf','#confluence:corals']).heated()
event.recipes.create.mixing(Fluid.of('kubejs:gravitation_potion',250), [Fluid.of('minecraft:water',250),'confluence:fireblossom','confluence:deathweed','confluence:blinkroot','minecraft:feather']).heated()
event.recipes.create.mixing(Fluid.of('kubejs:greater_luck_potion',250), [Fluid.of('minecraft:water',250),'confluence:waterleaf','confluence:ladybug','confluence:pink_pearl']).heated()
event.recipes.create.mixing(Fluid.of('kubejs:heartreach_potion',250), [Fluid.of('minecraft:water',250),'confluence:daybloom','confluence:crimson_tiger_fish']).heated()
event.recipes.create.mixing(Fluid.of('kubejs:hunter_potion',250), [Fluid.of('minecraft:water',250),'confluence:dayblook','confluence:blinkroot','confluence:shark_fin']).heated()
//event.recipes.create.mixing(Fluid.of('kubejs:inferno_potion',250), [Fluid.of('minecraft:water',250),'confluence:fireblossom','confluence:flarefin_koi','confluence:obsidian_fish']).heated()
event.recipes.create.mixing(Fluid.of('kubejs:ironskin_potion',250), [Fluid.of('minecraft:water',250),'confluence:moonglow','confluence:blinkroot']).heated()
event.recipes.create.mixing(Fluid.of('kubejs:lesser_luck_potion',250), [Fluid.of('minecraft:water',250),'confluence:daybloom','#c:iron_ores']).heated()
event.recipes.create.mixing(Fluid.of('kubejs:lifeforce_potion',250), [Fluid.of('minecraft:water',250),'confluence:waterleaf','confluence:ladybug','confluence:white_pearl']).heated()
//event.recipes.create.mixing(Fluid.of('kubejs:luck_potion',250), [Fluid.of('minecraft:water',250),'confluence:moonglow','confluence:prismite','confluence:shiverthorn','confluence:moonglow']).heated()
//event.recipes.create.mixing(Fluid.of('kubejs:magic_power_potion',250), [Fluid.of('minecraft:water',250),'confluence:princess_fish','confluence:shiverthorn']).heated()
event.recipes.create.mixing(Fluid.of('kubejs:mana_regeneration_potion',250), [Fluid.of('minecraft:water',250),'confluence:waterleaf','confluence:ladybug','confluence:black_pearl']).heated()
event.recipes.create.mixing(Fluid.of('kubejs:mining_potion',250), [Fluid.of('minecraft:water',250),'confluence:moonglow','confluence:deathweed','confluence:falling_star']).heated()
event.recipes.create.mixing(Fluid.of('kubejs:night_owl_potion',250), [Fluid.of('minecraft:water',250),'confluence:blinkroot','confluence:antlion_mandible']).heated()
event.recipes.create.mixing(Fluid.of('kubejs:obsidian_skin_potion',250), [Fluid.of('minecraft:water',250),'confluence:fireblossom','confluence:waterleaf','minecraft:obsidian']).heated()
//event.recipes.create.mixing(Fluid.of('kubejs:rage_potion',250), [Fluid.of('minecraft:water',250),'confluence:deathweed','confluence:hemopiranha']).heated()
event.recipes.create.mixing(Fluid.of('kubejs:shine_potion',250), [Fluid.of('minecraft:water',250),'confluence:daybloom','confluence:glowing_mushroom']).heated()
event.recipes.create.mixing(Fluid.of('kubejs:sonar_potion',250), [Fluid.of('minecraft:water',250),'confluence:daybloom','#confluence:corals']).heated()
event.recipes.create.mixing(Fluid.of('kubejs:spelunker_potion',250), [Fluid.of('minecraft:water',250),'confluence:blinkroot','confluence:moonglow','#confluence:gold_ores']).heated()
event.recipes.create.mixing(Fluid.of('kubejs:summoning_potion',250), [Fluid.of('minecraft:water',250),'confluence:moonglow','confluence:variegated_lard_fish']).heated()
event.recipes.create.mixing(Fluid.of('kubejs:thorns_potion',250), [Fluid.of('minecraft:water',250),'confluence:deathweed','minecraft:catctus']).heated()
event.recipes.create.mixing(Fluid.of('kubejs:titan_potion',250), [Fluid.of('minecraft:water',250),'confluence:deathweed','confluence:shiverthorn','minecraft:bone']).heated()
event.recipes.create.mixing(Fluid.of('kubejs:water_walking_potion',250), [Fluid.of('minecraft:water',250),'confluence:waterleaf','confluence:shark_fin']).heated()
event.recipes.create.mixing(Fluid.of('kubejs:wrath_potion',250), [Fluid.of('minecraft:water',250),'confluence:deathweed','confluence:ebonkoi']).heated()




event.shapeless(
Item.of('confluence:silt_block'), // arg 1: output
['minecraft:sand','minecraft:clay'])// arg 2:input
event.shapeless(
Item.of('confluence:marine_gravel'), // arg 1: output
['minecraft:gravel','minecraft:kelp','minecraft:sand'])// arg 2:input
event.shapeless(
Item.of('confluence:slush'), // arg 1: output
['minecraft:snow_block','minecraft:ice','minecraft:gravel'])
event.shapeless(
Item.of('minecraft:andesite'), // arg 1: output
['minecraft:cobblestone'])

event.replaceInput(
  {input: 'minecraft:amethyst_shard'}, // Arg 1: the filter
  'minecraft:amethyst_shard',            // Arg 2: the item to replace
  '#c:gems/amethyst'         // Arg 3: the item to replace it with
  // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
)
event.replaceInput(
  {input: 'confluence:amethyst' }, // Arg 1: the filter
  'confluence:amethyst',            // Arg 2: the item to replace
  '#c:gems/amethyst'         // Arg 3: the item to replace it with
  // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
)


event.remove({id:'minecraft:diamond_chestplate'})
event.remove({id:'minecraft:diamond_boots'})
event.remove({id:'minecraft:diamond_leggings'})
event.remove({id:'minecraft:diamond_helmet'})
event.remove({id:'minecraft:diamond_sword'})
event.remove({id:'minecraft:diamond_axe'})
event.remove({id:'minecraft:diamond_shovel'})
event.remove({id:'minecraft:diamond_pickaxe'})
event.remove({id:'minecraft:leather_chestplate'})
event.remove({id:'minecraft:leather_boots'})
event.remove({id:'minecraft:leather_leggings'})
event.remove({id:'minecraft:leather_helmet'})


event.recipes.create.filling('confluence:ammo_reservation_potion', [Fluid.of('kubejs:ammo_reservation_potion'), 'minecraft:glass_bottle'])
})