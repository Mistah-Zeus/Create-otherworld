//Visit the wiki for more info - https://kubejs.com/

ServerEvents.recipes(event => {
event.recipes.create.mixing('minecraft:diamond', 'minecraft:coal_block')


event.recipes.create.mixing(['confluence:raw_chlorophyte',CreateItem.of('confluence:raw_chlorophyte',0.25)], ['create:pulp', 'create:pulp','confluence:raw_chlorophyte']).heated()
event.recipes.create.mixing(Fluid.of('kubejs:ammo_reservation_potion'), 'minecraft:oak_sapling').heated()
event.recipes.create.mixing(Fluid.of('kubejs:archery_potion'), ['minecraft:oak_sapling', 'minecraft:oak_sapling']).heated()
event.recipes.create.mixing(Fluid.of('kubejs:battle_potion'), ['minecraft:oak_sapling', 'minecraft:oak_sapling']).heated()
event.recipes.create.mixing(Fluid.of('kubejs:biome_sight_potion'), ['minecraft:oak_sapling', 'minecraft:oak_sapling']).heated()
event.recipes.create.mixing(Fluid.of('kubejs:builder_potion'), ['minecraft:oak_sapling', 'minecraft:oak_sapling']).heated()
event.recipes.create.mixing(Fluid.of('kubejs:calming_potion'), ['minecraft:oak_sapling', 'minecraft:oak_sapling']).heated()
event.recipes.create.mixing(Fluid.of('kubejs:crate_potion'), ['minecraft:oak_sapling', 'minecraft:oak_sapling']).heated()
event.recipes.create.mixing(Fluid.of('kubejs:dangersense_potion'), ['minecraft:oak_sapling', 'minecraft:oak_sapling']).heated()
event.recipes.create.mixing(Fluid.of('kubejs:endurance_potion'), ['minecraft:oak_sapling', 'minecraft:oak_sapling']).heated()
event.recipes.create.mixing(Fluid.of('kubejs:featherfall_potion'), ['minecraft:oak_sapling', 'minecraft:oak_sapling']).heated()
event.recipes.create.mixing(Fluid.of('kubejs:fishing_potion'), ['minecraft:oak_sapling', 'minecraft:oak_sapling']).heated()
event.recipes.create.mixing(Fluid.of('kubejs:flipper_potion'), ['minecraft:oak_sapling', 'minecraft:oak_sapling']).heated()
event.recipes.create.mixing(Fluid.of('kubejs:gills_potion'), ['minecraft:oak_sapling', 'minecraft:oak_sapling']).heated()
event.recipes.create.mixing(Fluid.of('kubejs:gravitation_potion'), ['minecraft:oak_sapling', 'minecraft:oak_sapling']).heated()
event.recipes.create.mixing(Fluid.of('kubejs:greater_luck_potion'), ['minecraft:oak_sapling', 'minecraft:oak_sapling']).heated()
event.recipes.create.mixing(Fluid.of('kubejs:heartreach_potion'), ['minecraft:oak_sapling', 'minecraft:oak_sapling']).heated()
event.recipes.create.mixing(Fluid.of('kubejs:hunter_potion'), ['minecraft:oak_sapling', 'minecraft:oak_sapling']).heated()
event.recipes.create.mixing(Fluid.of('kubejs:inferno_potion'), ['minecraft:oak_sapling', 'minecraft:oak_sapling']).heated()
event.recipes.create.mixing(Fluid.of('kubejs:ironskin_potion'), ['minecraft:oak_sapling', 'minecraft:oak_sapling']).heated()
event.recipes.create.mixing(Fluid.of('kubejs:lesser_luck_potion'), ['minecraft:oak_sapling', 'minecraft:oak_sapling']).heated()
event.recipes.create.mixing(Fluid.of('kubejs:lifeforce_potion'), ['minecraft:oak_sapling', 'minecraft:oak_sapling']).heated()
event.recipes.create.mixing(Fluid.of('kubejs:luck_potion'), ['minecraft:oak_sapling', 'minecraft:oak_sapling']).heated()
event.recipes.create.mixing(Fluid.of('kubejs:magic_power_potion'), ['minecraft:oak_sapling', 'minecraft:oak_sapling']).heated()
event.recipes.create.mixing(Fluid.of('kubejs:mana_regeneration_potion'), ['minecraft:oak_sapling', 'minecraft:oak_sapling']).heated()
event.recipes.create.mixing(Fluid.of('kubejs:mining_potion'), ['minecraft:oak_sapling', 'minecraft:oak_sapling']).heated()
event.recipes.create.mixing(Fluid.of('kubejs:night_owl_potion'), ['minecraft:oak_sapling', 'minecraft:oak_sapling']).heated()
event.recipes.create.mixing(Fluid.of('kubejs:obsidian_skin_potion'), ['minecraft:oak_sapling', 'minecraft:oak_sapling']).heated()
event.recipes.create.mixing(Fluid.of('kubejs:rage_potion'), ['minecraft:oak_sapling', 'minecraft:oak_sapling']).heated()
event.recipes.create.mixing(Fluid.of('kubejs:shine_potion'), ['minecraft:oak_sapling', 'minecraft:oak_sapling']).heated()
event.recipes.create.mixing(Fluid.of('kubejs:sonar_potion'), ['minecraft:oak_sapling', 'minecraft:oak_sapling']).heated()
event.recipes.create.mixing(Fluid.of('kubejs:spelunker_potion'), ['minecraft:oak_sapling', 'minecraft:oak_sapling']).heated()
event.recipes.create.mixing(Fluid.of('kubejs:summoning_potion'), ['minecraft:oak_sapling', 'minecraft:oak_sapling']).heated()
event.recipes.create.mixing(Fluid.of('kubejs:thorns_potion'), ['minecraft:oak_sapling', 'minecraft:oak_sapling']).heated()
event.recipes.create.mixing(Fluid.of('kubejs:titan_potion'), ['minecraft:oak_sapling', 'minecraft:oak_sapling']).heated()
event.recipes.create.mixing(Fluid.of('kubejs:water_walking_potion'), ['minecraft:oak_sapling', 'minecraft:oak_sapling']).heated()
event.recipes.create.mixing(Fluid.of('kubejs:wrath_potion'), ['minecraft:oak_sapling', 'minecraft:oak_sapling']).heated()




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