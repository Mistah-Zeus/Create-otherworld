ServerEvents.tags('item', event => {
    event.add('confluence:silver_ore_smelting','create:crushed_raw_silver')
    event.add('confluence:lead_ore_smelting','create:crushed_raw_lead')
    event.add('confluence:platinum_ore_smelting','create:crushed_raw_platinum')
    event.add('confluence:tin_ore_smelting','create:crushed_raw_tin')
    event.add('confluence:tungsten_ore_smelting','create:crushed_raw_tungsten')
    event.add('create:crushed_raw_silver','create:crushed_raw_silver')
    event.add('create:crushed_raw_lead','create:crushed_raw_lead')
    event.add('create:crushed_raw_platinum','create:crushed_raw_platinum')
    event.add('create:crushed_raw_tin', 'create:crushed_raw_tin')
    event.add('create:crushed_raw_tungsten', 'create:crushed_raw_tungsten')

    event.add('c:water_bottle','confluence:bottled_water')


    event.add('c:raw_ores','minecraft:raw_iron')
    event.add('c:raw_ores','minecraft:raw_copper')
    event.add('c:raw_ores','minecraft:raw_gold')
    event.add('c:raw_ores','confluence:raw_tin')
    event.add('c:raw_ores','confluence:raw_lead')
    event.add('c:raw_ores','confluence:raw_silver')
    event.add('c:raw_ores','confluence:raw_tungsten')
    event.add('c:raw_ores','confluence:raw_platinum')
    event.add('c:raw_ores','create:raw_zinc')


    event.add('minecraft:enchantment_power_transmitter','#c:not_solid')

    event.add('c:not_solid','#c:chains')
    event.add('c:chains','confluence:amethyst_chain')
    event.add('c:chains','confluence:amber_chain')
    event.add('c:chains','confluence:sapphire_chain')
    event.add('c:chains','confluence:diamond_chain')
    event.add('c:chains','confluence:ruby_chain')
    event.add('c:chains','confluence:topaz_chain')
    event.add('c:chains','confluence:emerald_chain')
    event.add('c:chains','confluence:bone_chain')
    event.add('c:chains','confluence:silk_chain')
})