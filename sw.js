if(!self.define){let s,e={};const l=(l,n)=>(l=new URL(l+".js",n).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(n,i)=>{const a=s||("document"in self?document.currentScript.src:"")||location.href;if(e[a])return;let t={};const r=s=>l(s,a),u={module:{uri:a},exports:t,require:r};e[a]=Promise.all(n.map((s=>u[s]||r(s)))).then((s=>(i(...s),t)))}}define(["./workbox-3625d7b0"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/404.md.04104f58.js",revision:null},{url:"assets/404.md.04104f58.lean.js",revision:null},{url:"assets/animation-controllers_afk-animation-controller.md.6e1b8e63.js",revision:null},{url:"assets/animation-controllers_afk-animation-controller.md.6e1b8e63.lean.js",revision:null},{url:"assets/animation-controllers_animation-controllers-intro.md.e6f28f29.js",revision:null},{url:"assets/animation-controllers_animation-controllers-intro.md.e6f28f29.lean.js",revision:null},{url:"assets/animation-controllers_death-commands.md.52d24b34.js",revision:null},{url:"assets/animation-controllers_death-commands.md.52d24b34.lean.js",revision:null},{url:"assets/animation-controllers_entity-commands.md.3f235d56.js",revision:null},{url:"assets/animation-controllers_entity-commands.md.3f235d56.lean.js",revision:null},{url:"assets/animation-controllers_index.md.67f291cb.js",revision:null},{url:"assets/animation-controllers_index.md.67f291cb.lean.js",revision:null},{url:"assets/animation-controllers_molang-into-scoreboard.md.89eed858.js",revision:null},{url:"assets/animation-controllers_molang-into-scoreboard.md.89eed858.lean.js",revision:null},{url:"assets/animation-controllers_respawn-commands.md.80baef12.js",revision:null},{url:"assets/animation-controllers_respawn-commands.md.80baef12.lean.js",revision:null},{url:"assets/app.87d4de97.js",revision:null},{url:"assets/blocks_applying-effects.md.234dffa2.js",revision:null},{url:"assets/blocks_applying-effects.md.234dffa2.lean.js",revision:null},{url:"assets/blocks_block-materials.md.02074f6d.js",revision:null},{url:"assets/blocks_block-materials.md.02074f6d.lean.js",revision:null},{url:"assets/blocks_block-shapes.md.dee40aa0.js",revision:null},{url:"assets/blocks_block-shapes.md.dee40aa0.lean.js",revision:null},{url:"assets/blocks_block-sounds.md.0191e5c9.js",revision:null},{url:"assets/blocks_block-sounds.md.0191e5c9.lean.js",revision:null},{url:"assets/blocks_block-tags.md.3f37cdb7.js",revision:null},{url:"assets/blocks_block-tags.md.3f37cdb7.lean.js",revision:null},{url:"assets/blocks_block-texture-variation.md.acc4ca7c.js",revision:null},{url:"assets/blocks_block-texture-variation.md.acc4ca7c.lean.js",revision:null},{url:"assets/blocks_blocks-experimental.md.1ee98b25.js",revision:null},{url:"assets/blocks_blocks-experimental.md.1ee98b25.lean.js",revision:null},{url:"assets/blocks_blocks-intro.md.7acd36d5.js",revision:null},{url:"assets/blocks_blocks-intro.md.7acd36d5.lean.js",revision:null},{url:"assets/blocks_blocks-stable.md.df564b80.js",revision:null},{url:"assets/blocks_blocks-stable.md.df564b80.lean.js",revision:null},{url:"assets/blocks_custom-crops.md.3984ec3a.js",revision:null},{url:"assets/blocks_custom-crops.md.3984ec3a.lean.js",revision:null},{url:"assets/blocks_custom-fluids.md.1e44b58e.js",revision:null},{url:"assets/blocks_custom-fluids.md.1e44b58e.lean.js",revision:null},{url:"assets/blocks_custom-glass-blocks.md.911b5801.js",revision:null},{url:"assets/blocks_custom-glass-blocks.md.911b5801.lean.js",revision:null},{url:"assets/blocks_custom-trees.md.43d90974.js",revision:null},{url:"assets/blocks_custom-trees.md.43d90974.lean.js",revision:null},{url:"assets/blocks_fake-blocks.md.7cac3df3.js",revision:null},{url:"assets/blocks_fake-blocks.md.7cac3df3.lean.js",revision:null},{url:"assets/blocks_flipbook-textures.md.7468e2a2.js",revision:null},{url:"assets/blocks_flipbook-textures.md.7468e2a2.lean.js",revision:null},{url:"assets/blocks_head-like-rotation.md.da158eca.js",revision:null},{url:"assets/blocks_head-like-rotation.md.da158eca.lean.js",revision:null},{url:"assets/blocks_index.md.75e7f414.js",revision:null},{url:"assets/blocks_index.md.75e7f414.lean.js",revision:null},{url:"assets/blocks_legacy-block-tags.md.d96fa2fb.js",revision:null},{url:"assets/blocks_legacy-block-tags.md.d96fa2fb.lean.js",revision:null},{url:"assets/blocks_ore-loot-tables.md.1baa1661.js",revision:null},{url:"assets/blocks_ore-loot-tables.md.1baa1661.lean.js",revision:null},{url:"assets/blocks_rotatable-blocks.md.8e87f277.js",revision:null},{url:"assets/blocks_rotatable-blocks.md.8e87f277.lean.js",revision:null},{url:"assets/blocks_troubleshooting-blocks.md.207841ab.js",revision:null},{url:"assets/blocks_troubleshooting-blocks.md.207841ab.lean.js",revision:null},{url:"assets/chunks/3.035a77e6.js",revision:null},{url:"assets/chunks/4.bf191be1.js",revision:null},{url:"assets/chunks/AlgoliaSearch.878b1739.js",revision:null},{url:"assets/chunks/compound.3f8f82ad.js",revision:null},{url:"assets/chunks/content_log.09e62547.js",revision:null},{url:"assets/chunks/Contributors.31a060c6.js",revision:null},{url:"assets/chunks/gametick.8221204e.js",revision:null},{url:"assets/chunks/settings_2.b0f9bbd3.js",revision:null},{url:"assets/chunks/snippets.5bdbd1d4.js",revision:null},{url:"assets/chunks/structure.a9b5a4fc.js",revision:null},{url:"assets/commands_block-states.md.fc344f97.js",revision:null},{url:"assets/commands_block-states.md.fc344f97.lean.js",revision:null},{url:"assets/commands_damage.md.7dc37198.js",revision:null},{url:"assets/commands_damage.md.7dc37198.lean.js",revision:null},{url:"assets/commands_entity-counter.md.5c074950.js",revision:null},{url:"assets/commands_entity-counter.md.5c074950.lean.js",revision:null},{url:"assets/commands_index.md.c1665c71.js",revision:null},{url:"assets/commands_index.md.c1665c71.lean.js",revision:null},{url:"assets/commands_intro-to-command-blocks.md.83ca08d6.js",revision:null},{url:"assets/commands_intro-to-command-blocks.md.83ca08d6.lean.js",revision:null},{url:"assets/commands_mcfunctions.md.63864227.js",revision:null},{url:"assets/commands_mcfunctions.md.63864227.lean.js",revision:null},{url:"assets/commands_nbt-commands.md.ec51e45f.js",revision:null},{url:"assets/commands_nbt-commands.md.ec51e45f.lean.js",revision:null},{url:"assets/commands_new-execute.md.1f1b6b61.js",revision:null},{url:"assets/commands_new-execute.md.1f1b6b61.lean.js",revision:null},{url:"assets/commands_on-first-join.md.64557595.js",revision:null},{url:"assets/commands_on-first-join.md.64557595.lean.js",revision:null},{url:"assets/commands_on-first-world-load.md.a9ba1e73.js",revision:null},{url:"assets/commands_on-first-world-load.md.a9ba1e73.lean.js",revision:null},{url:"assets/commands_on-player-death.md.dddc84fd.js",revision:null},{url:"assets/commands_on-player-death.md.dddc84fd.lean.js",revision:null},{url:"assets/commands_on-player-join.md.77e94010.js",revision:null},{url:"assets/commands_on-player-join.md.77e94010.lean.js",revision:null},{url:"assets/commands_on-player-leave.md.545d1880.js",revision:null},{url:"assets/commands_on-player-leave.md.545d1880.lean.js",revision:null},{url:"assets/commands_on-player-respawn.md.9dde6ef0.js",revision:null},{url:"assets/commands_on-player-respawn.md.9dde6ef0.lean.js",revision:null},{url:"assets/commands_playsound.md.a9c1f320.js",revision:null},{url:"assets/commands_playsound.md.a9c1f320.lean.js",revision:null},{url:"assets/commands_relative-coordinates.md.c8f7f916.js",revision:null},{url:"assets/commands_relative-coordinates.md.c8f7f916.lean.js",revision:null},{url:"assets/commands_scoreboard-operations.md.d706dae6.js",revision:null},{url:"assets/commands_scoreboard-operations.md.d706dae6.lean.js",revision:null},{url:"assets/commands_scoreboard-timers.md.3fa0ed92.js",revision:null},{url:"assets/commands_scoreboard-timers.md.3fa0ed92.lean.js",revision:null},{url:"assets/commands_selectors.md.e87cac4b.js",revision:null},{url:"assets/commands_selectors.md.e87cac4b.lean.js",revision:null},{url:"assets/commands_tellraw.md.f57f7b19.js",revision:null},{url:"assets/commands_tellraw.md.f57f7b19.lean.js",revision:null},{url:"assets/concepts_contents.md.fb3b5a9b.js",revision:null},{url:"assets/concepts_contents.md.fb3b5a9b.lean.js",revision:null},{url:"assets/concepts_emojis.md.53c4f145.js",revision:null},{url:"assets/concepts_emojis.md.53c4f145.lean.js",revision:null},{url:"assets/concepts_index.md.1ea13d4b.js",revision:null},{url:"assets/concepts_index.md.1ea13d4b.lean.js",revision:null},{url:"assets/concepts_molang.md.1c56dd53.js",revision:null},{url:"assets/concepts_molang.md.1c56dd53.lean.js",revision:null},{url:"assets/concepts_namespaces.md.6982ba47.js",revision:null},{url:"assets/concepts_namespaces.md.6982ba47.lean.js",revision:null},{url:"assets/concepts_overwriting-assets.md.ad6ac112.js",revision:null},{url:"assets/concepts_overwriting-assets.md.ad6ac112.lean.js",revision:null},{url:"assets/concepts_shaders.md.07fbf7c3.js",revision:null},{url:"assets/concepts_shaders.md.07fbf7c3.lean.js",revision:null},{url:"assets/concepts_sounds.md.0298bc0b.js",revision:null},{url:"assets/concepts_sounds.md.0298bc0b.lean.js",revision:null},{url:"assets/concepts_subpacks.md.44da9158.js",revision:null},{url:"assets/concepts_subpacks.md.44da9158.lean.js",revision:null},{url:"assets/concepts_text-and-translations.md.e7429014.js",revision:null},{url:"assets/concepts_text-and-translations.md.e7429014.lean.js",revision:null},{url:"assets/concepts_textures-list.md.3e246a2c.js",revision:null},{url:"assets/concepts_textures-list.md.3e246a2c.lean.js",revision:null},{url:"assets/contribute-how-to.md.8191d118.js",revision:null},{url:"assets/contribute-how-to.md.8191d118.lean.js",revision:null},{url:"assets/contribute-style.md.68bd26bf.js",revision:null},{url:"assets/contribute-style.md.68bd26bf.lean.js",revision:null},{url:"assets/contribute.md.dd59ab55.js",revision:null},{url:"assets/contribute.md.dd59ab55.lean.js",revision:null},{url:"assets/discord.md.aa3ac302.js",revision:null},{url:"assets/discord.md.aa3ac302.lean.js",revision:null},{url:"assets/documentation_advanced-molang.md.753982dd.js",revision:null},{url:"assets/documentation_advanced-molang.md.753982dd.lean.js",revision:null},{url:"assets/documentation_creative-categories.md.c2bc6712.js",revision:null},{url:"assets/documentation_creative-categories.md.c2bc6712.lean.js",revision:null},{url:"assets/documentation_file-types.md.109198f6.js",revision:null},{url:"assets/documentation_file-types.md.109198f6.lean.js",revision:null},{url:"assets/documentation_fog-ids.md.9ea60e77.js",revision:null},{url:"assets/documentation_fog-ids.md.9ea60e77.lean.js",revision:null},{url:"assets/documentation_index.md.41ece251.js",revision:null},{url:"assets/documentation_index.md.41ece251.lean.js",revision:null},{url:"assets/documentation_material-config-description.md.dbe35600.js",revision:null},{url:"assets/documentation_material-config-description.md.dbe35600.lean.js",revision:null},{url:"assets/documentation_materials.md.58c5e694.js",revision:null},{url:"assets/documentation_materials.md.58c5e694.lean.js",revision:null},{url:"assets/documentation_pack-structure.md.650f7067.js",revision:null},{url:"assets/documentation_pack-structure.md.650f7067.lean.js",revision:null},{url:"assets/documentation_projectiles.md.1fcbc375.js",revision:null},{url:"assets/documentation_projectiles.md.1fcbc375.lean.js",revision:null},{url:"assets/documentation_queries.md.80c611c5.js",revision:null},{url:"assets/documentation_queries.md.80c611c5.lean.js",revision:null},{url:"assets/documentation_shared-constructs.md.5836d3d2.js",revision:null},{url:"assets/documentation_shared-constructs.md.5836d3d2.lean.js",revision:null},{url:"assets/documentation_sound-definitions.md.ae775859.js",revision:null},{url:"assets/documentation_sound-definitions.md.ae775859.lean.js",revision:null},{url:"assets/entities_boat-entities.md.2afbdf33.js",revision:null},{url:"assets/entities_boat-entities.md.2afbdf33.lean.js",revision:null},{url:"assets/entities_detecting-other-entities.md.050e1dc9.js",revision:null},{url:"assets/entities_detecting-other-entities.md.050e1dc9.lean.js",revision:null},{url:"assets/entities_disabling-team-damage.md.7e3f1813.js",revision:null},{url:"assets/entities_disabling-team-damage.md.7e3f1813.lean.js",revision:null},{url:"assets/entities_dummy-components.md.d84ffeec.js",revision:null},{url:"assets/entities_dummy-components.md.d84ffeec.lean.js",revision:null},{url:"assets/entities_dummy-entities.md.a75a3d3e.js",revision:null},{url:"assets/entities_dummy-entities.md.a75a3d3e.lean.js",revision:null},{url:"assets/entities_entity-attack.md.90fc8d95.js",revision:null},{url:"assets/entities_entity-attack.md.90fc8d95.lean.js",revision:null},{url:"assets/entities_entity-events.md.bdcbd3d3.js",revision:null},{url:"assets/entities_entity-events.md.bdcbd3d3.lean.js",revision:null},{url:"assets/entities_entity-holds-item.md.ac6068d9.js",revision:null},{url:"assets/entities_entity-holds-item.md.ac6068d9.lean.js",revision:null},{url:"assets/entities_entity-intro-bp.md.57a0dadf.js",revision:null},{url:"assets/entities_entity-intro-bp.md.57a0dadf.lean.js",revision:null},{url:"assets/entities_entity-intro-rp.md.b1ebf937.js",revision:null},{url:"assets/entities_entity-intro-rp.md.b1ebf937.lean.js",revision:null},{url:"assets/entities_entity-movement.md.de45de2c.js",revision:null},{url:"assets/entities_entity-movement.md.de45de2c.lean.js",revision:null},{url:"assets/entities_entity-properties.md.cd6c3d61.js",revision:null},{url:"assets/entities_entity-properties.md.cd6c3d61.lean.js",revision:null},{url:"assets/entities_flying-entities.md.10e17979.js",revision:null},{url:"assets/entities_flying-entities.md.10e17979.lean.js",revision:null},{url:"assets/entities_index.md.25672442.js",revision:null},{url:"assets/entities_index.md.25672442.lean.js",revision:null},{url:"assets/entities_introduction-to-aec.md.e533e91b.js",revision:null},{url:"assets/entities_introduction-to-aec.md.e533e91b.lean.js",revision:null},{url:"assets/entities_invulnerable-entities.md.e859aada.js",revision:null},{url:"assets/entities_invulnerable-entities.md.e859aada.lean.js",revision:null},{url:"assets/entities_look-at-entity.md.878b41b6.js",revision:null},{url:"assets/entities_look-at-entity.md.878b41b6.lean.js",revision:null},{url:"assets/entities_non-mob-runtime-identifiers.md.c1330766.js",revision:null},{url:"assets/entities_non-mob-runtime-identifiers.md.c1330766.lean.js",revision:null},{url:"assets/entities_npc-dialogs.md.53a6d28d.js",revision:null},{url:"assets/entities_npc-dialogs.md.53a6d28d.lean.js",revision:null},{url:"assets/entities_render-controllers.md.ac352f73.js",revision:null},{url:"assets/entities_render-controllers.md.ac352f73.lean.js",revision:null},{url:"assets/entities_runtime-identifier.md.b4e09567.js",revision:null},{url:"assets/entities_runtime-identifier.md.b4e09567.lean.js",revision:null},{url:"assets/entities_sleeping-entities.md.b9b02d24.js",revision:null},{url:"assets/entities_sleeping-entities.md.b9b02d24.lean.js",revision:null},{url:"assets/entities_solid-entities.md.8da8ca93.js",revision:null},{url:"assets/entities_solid-entities.md.8da8ca93.lean.js",revision:null},{url:"assets/entities_spawn-rules.md.5ca734e7.js",revision:null},{url:"assets/entities_spawn-rules.md.5ca734e7.lean.js",revision:null},{url:"assets/entities_spawning-tamed-entities.md.6a47a35b.js",revision:null},{url:"assets/entities_spawning-tamed-entities.md.6a47a35b.lean.js",revision:null},{url:"assets/entities_timers.md.422029b3.js",revision:null},{url:"assets/entities_timers.md.422029b3.lean.js",revision:null},{url:"assets/entities_troubleshooting-entities.md.c290a534.js",revision:null},{url:"assets/entities_troubleshooting-entities.md.c290a534.lean.js",revision:null},{url:"assets/entities_vanilla-usage-spawn-rules.md.49ee02d2.js",revision:null},{url:"assets/entities_vanilla-usage-spawn-rules.md.49ee02d2.lean.js",revision:null},{url:"assets/entities_village-mechanic.md.b440ab80.js",revision:null},{url:"assets/entities_village-mechanic.md.b440ab80.lean.js",revision:null},{url:"assets/entities_vuc-full.md.86264425.lean.js",revision:null},{url:"assets/entities_vusr-full.md.f3c7678a.js",revision:null},{url:"assets/entities_vusr-full.md.f3c7678a.lean.js",revision:null},{url:"assets/graph-test.md.7cf69fa7.js",revision:null},{url:"assets/graph-test.md.7cf69fa7.lean.js",revision:null},{url:"assets/guide_addons.md.306d0dc3.js",revision:null},{url:"assets/guide_addons.md.306d0dc3.lean.js",revision:null},{url:"assets/guide_advancedmanifest.md.1c2b6b52.js",revision:null},{url:"assets/guide_advancedmanifest.md.1c2b6b52.lean.js",revision:null},{url:"assets/guide_blockbench.md.53b67182.js",revision:null},{url:"assets/guide_blockbench.md.53b67182.lean.js",revision:null},{url:"assets/guide_custom-entity.md.3cde5e01.js",revision:null},{url:"assets/guide_custom-entity.md.3cde5e01.lean.js",revision:null},{url:"assets/guide_custom-item.md.cbb836f5.js",revision:null},{url:"assets/guide_custom-item.md.cbb836f5.lean.js",revision:null},{url:"assets/guide_download-packs.md.c905c1da.js",revision:null},{url:"assets/guide_download-packs.md.c905c1da.lean.js",revision:null},{url:"assets/guide_format-version.md.896a38aa.js",revision:null},{url:"assets/guide_format-version.md.896a38aa.lean.js",revision:null},{url:"assets/guide_index.md.9ba32755.js",revision:null},{url:"assets/guide_index.md.9ba32755.lean.js",revision:null},{url:"assets/guide_introduction.md.8646f2d0.js",revision:null},{url:"assets/guide_introduction.md.8646f2d0.lean.js",revision:null},{url:"assets/guide_loot-table.md.eb84b3d0.js",revision:null},{url:"assets/guide_loot-table.md.eb84b3d0.lean.js",revision:null},{url:"assets/guide_project-setup-android.md.83e2be5f.js",revision:null},{url:"assets/guide_project-setup-android.md.83e2be5f.lean.js",revision:null},{url:"assets/guide_project-setup.md.7577dda7.js",revision:null},{url:"assets/guide_project-setup.md.7577dda7.lean.js",revision:null},{url:"assets/guide_software-preparation.md.f1ca68d9.js",revision:null},{url:"assets/guide_software-preparation.md.f1ca68d9.lean.js",revision:null},{url:"assets/guide_troubleshooting.md.75ec0204.js",revision:null},{url:"assets/guide_troubleshooting.md.75ec0204.lean.js",revision:null},{url:"assets/guide_understanding-json.md.1be4bb3a.js",revision:null},{url:"assets/guide_understanding-json.md.1be4bb3a.lean.js",revision:null},{url:"assets/hacktoberfest.md.42d162ef.js",revision:null},{url:"assets/hacktoberfest.md.42d162ef.lean.js",revision:null},{url:"assets/index.md.b92dfd83.js",revision:null},{url:"assets/index.md.b92dfd83.lean.js",revision:null},{url:"assets/items_attachables.md.d56ce853.js",revision:null},{url:"assets/items_attachables.md.d56ce853.lean.js",revision:null},{url:"assets/items_custom-armor.md.dcb3330c.js",revision:null},{url:"assets/items_custom-armor.md.dcb3330c.lean.js",revision:null},{url:"assets/items_custom-weapon.md.799b014f.js",revision:null},{url:"assets/items_custom-weapon.md.799b014f.lean.js",revision:null},{url:"assets/items_enchantments.md.d2054768.js",revision:null},{url:"assets/items_enchantments.md.d2054768.lean.js",revision:null},{url:"assets/items_equipped-item-commands.md.1770337e.js",revision:null},{url:"assets/items_equipped-item-commands.md.1770337e.lean.js",revision:null},{url:"assets/items_index.md.b30f6f36.js",revision:null},{url:"assets/items_index.md.b30f6f36.lean.js",revision:null},{url:"assets/items_item-identifiers.md.c7c2cd85.js",revision:null},{url:"assets/items_item-identifiers.md.c7c2cd85.lean.js",revision:null},{url:"assets/items_items-16.md.7b5eefc9.js",revision:null},{url:"assets/items_items-16.md.7b5eefc9.lean.js",revision:null},{url:"assets/items_items-intro.md.61b0953e.js",revision:null},{url:"assets/items_items-intro.md.61b0953e.lean.js",revision:null},{url:"assets/items_spawning-items.md.0a3f0dfd.js",revision:null},{url:"assets/items_spawning-items.md.0a3f0dfd.lean.js",revision:null},{url:"assets/items_spear.md.a6baaae7.js",revision:null},{url:"assets/items_spear.md.a6baaae7.lean.js",revision:null},{url:"assets/items_throwable.md.4a233893.js",revision:null},{url:"assets/items_throwable.md.4a233893.lean.js",revision:null},{url:"assets/items_tool-durability.md.7b38662a.js",revision:null},{url:"assets/items_tool-durability.md.7b38662a.lean.js",revision:null},{url:"assets/items_troubleshooting-items.md.86409fa8.js",revision:null},{url:"assets/items_troubleshooting-items.md.86409fa8.lean.js",revision:null},{url:"assets/items_vanilla-usage-items.md.1c565545.js",revision:null},{url:"assets/items_vanilla-usage-items.md.1c565545.lean.js",revision:null},{url:"assets/items_vui-full.md.87c4f664.js",revision:null},{url:"assets/items_vui-full.md.87c4f664.lean.js",revision:null},{url:"assets/json-ui_add-hud-elements.md.2ebb132f.js",revision:null},{url:"assets/json-ui_add-hud-elements.md.2ebb132f.lean.js",revision:null},{url:"assets/json-ui_aseprite-animations.md.a15abaff.js",revision:null},{url:"assets/json-ui_aseprite-animations.md.a15abaff.lean.js",revision:null},{url:"assets/json-ui_best-practices.md.26be8bc3.js",revision:null},{url:"assets/json-ui_best-practices.md.26be8bc3.lean.js",revision:null},{url:"assets/json-ui_index.md.371784e5.js",revision:null},{url:"assets/json-ui_index.md.371784e5.lean.js",revision:null},{url:"assets/json-ui_json-ui-documentation.md.6340759e.js",revision:null},{url:"assets/json-ui_json-ui-documentation.md.6340759e.lean.js",revision:null},{url:"assets/json-ui_json-ui-intro.md.4dae0339.js",revision:null},{url:"assets/json-ui_json-ui-intro.md.4dae0339.lean.js",revision:null},{url:"assets/json-ui_preserve-title-texts.md.6fbd3092.js",revision:null},{url:"assets/json-ui_preserve-title-texts.md.6fbd3092.lean.js",revision:null},{url:"assets/json-ui_string-to-number.md.6838b1d6.js",revision:null},{url:"assets/json-ui_string-to-number.md.6838b1d6.lean.js",revision:null},{url:"assets/loot_index.md.e8a1dc14.js",revision:null},{url:"assets/loot_index.md.e8a1dc14.lean.js",revision:null},{url:"assets/loot_item-functions.md.5a4bb2ae.js",revision:null},{url:"assets/loot_item-functions.md.5a4bb2ae.lean.js",revision:null},{url:"assets/loot_loot-tables.md.7a938b7a.js",revision:null},{url:"assets/loot_loot-tables.md.7a938b7a.lean.js",revision:null},{url:"assets/loot_randomized-structure-loot.md.814c4ca8.js",revision:null},{url:"assets/loot_randomized-structure-loot.md.814c4ca8.lean.js",revision:null},{url:"assets/loot_recipes.md.6fd549a4.js",revision:null},{url:"assets/loot_recipes.md.6fd549a4.lean.js",revision:null},{url:"assets/loot_trade-tables.md.b2c81484.js",revision:null},{url:"assets/loot_trade-tables.md.b2c81484.lean.js",revision:null},{url:"assets/loot_trading-behavior.md.f03d302d.js",revision:null},{url:"assets/loot_trading-behavior.md.f03d302d.lean.js",revision:null},{url:"assets/meta_addon-performance.md.323d71e8.js",revision:null},{url:"assets/meta_addon-performance.md.323d71e8.lean.js",revision:null},{url:"assets/meta_index.md.2eea964f.js",revision:null},{url:"assets/meta_index.md.2eea964f.lean.js",revision:null},{url:"assets/meta_jq.md.3cdac63f.js",revision:null},{url:"assets/meta_jq.md.3cdac63f.lean.js",revision:null},{url:"assets/meta_style-guide.md.73795f25.js",revision:null},{url:"assets/meta_style-guide.md.73795f25.lean.js",revision:null},{url:"assets/meta_useful-links.md.5e4248a0.js",revision:null},{url:"assets/meta_useful-links.md.5e4248a0.lean.js",revision:null},{url:"assets/meta_using-schemas.md.7909dc30.js",revision:null},{url:"assets/meta_using-schemas.md.7909dc30.lean.js",revision:null},{url:"assets/meta_version-control.md.9f4dc84f.js",revision:null},{url:"assets/meta_version-control.md.9f4dc84f.lean.js",revision:null},{url:"assets/nbt_experimental-education-edition.md.b5f4003f.js",revision:null},{url:"assets/nbt_experimental-education-edition.md.b5f4003f.lean.js",revision:null},{url:"assets/nbt_index.md.e5566339.js",revision:null},{url:"assets/nbt_index.md.e5566339.lean.js",revision:null},{url:"assets/nbt_mcstructure.md.c76f746c.js",revision:null},{url:"assets/nbt_mcstructure.md.c76f746c.lean.js",revision:null},{url:"assets/nbt_nbt-in-depth.md.c49dc1d2.js",revision:null},{url:"assets/nbt_nbt-in-depth.md.c49dc1d2.lean.js",revision:null},{url:"assets/nbt_step-by-step-example.md.46d57e62.js",revision:null},{url:"assets/nbt_step-by-step-example.md.46d57e62.lean.js",revision:null},{url:"assets/nbt_structure-limits.md.5e0e80bb.js",revision:null},{url:"assets/nbt_structure-limits.md.5e0e80bb.lean.js",revision:null},{url:"assets/particles_disabling-particles.md.5cbe1c13.js",revision:null},{url:"assets/particles_disabling-particles.md.5cbe1c13.lean.js",revision:null},{url:"assets/particles_index.md.26e423a6.js",revision:null},{url:"assets/particles_index.md.26e423a6.lean.js",revision:null},{url:"assets/particles_particles-and-sounds.md.ee76e759.js",revision:null},{url:"assets/particles_particles-and-sounds.md.ee76e759.lean.js",revision:null},{url:"assets/particles_particles.md.a239ec9e.js",revision:null},{url:"assets/particles_particles.md.a239ec9e.lean.js",revision:null},{url:"assets/particles_vanilla-particles.md.4f412e26.js",revision:null},{url:"assets/particles_vanilla-particles.md.4f412e26.lean.js",revision:null},{url:"assets/privacy.md.c00b90f9.js",revision:null},{url:"assets/privacy.md.c00b90f9.lean.js",revision:null},{url:"assets/scripting_api-environment.md.8bccf213.js",revision:null},{url:"assets/scripting_api-environment.md.8bccf213.lean.js",revision:null},{url:"assets/scripting_custom-command.md.3960d6e0.js",revision:null},{url:"assets/scripting_custom-command.md.3960d6e0.lean.js",revision:null},{url:"assets/scripting_game-tests.md.a3cebd09.js",revision:null},{url:"assets/scripting_game-tests.md.a3cebd09.lean.js",revision:null},{url:"assets/scripting_gametest-form.md.c9b841f3.js",revision:null},{url:"assets/scripting_gametest-form.md.c9b841f3.lean.js",revision:null},{url:"assets/scripting_gametest-qna.md.c12f256e.js",revision:null},{url:"assets/scripting_gametest-qna.md.c12f256e.lean.js",revision:null},{url:"assets/scripting_index.md.e0f9201f.js",revision:null},{url:"assets/scripting_index.md.e0f9201f.lean.js",revision:null},{url:"assets/scripting_resources.md.950b6745.js",revision:null},{url:"assets/scripting_resources.md.950b6745.lean.js",revision:null},{url:"assets/scripting_saving-loading.md.6c036ec3.js",revision:null},{url:"assets/scripting_saving-loading.md.6c036ec3.lean.js",revision:null},{url:"assets/scripting_script-modules.md.834f9cf0.js",revision:null},{url:"assets/scripting_script-modules.md.834f9cf0.lean.js",revision:null},{url:"assets/scripting_script-net.md.fcae89fd.js",revision:null},{url:"assets/scripting_script-net.md.fcae89fd.lean.js",revision:null},{url:"assets/scripting_script-server.md.57b4c754.js",revision:null},{url:"assets/scripting_script-server.md.57b4c754.lean.js",revision:null},{url:"assets/scripting_script-watchdog.md.e611ed25.js",revision:null},{url:"assets/scripting_script-watchdog.md.e611ed25.lean.js",revision:null},{url:"assets/scripting_scripting-intro.md.88e63be3.js",revision:null},{url:"assets/scripting_scripting-intro.md.88e63be3.lean.js",revision:null},{url:"assets/scripting_starting-scripts.md.4dc95916.js",revision:null},{url:"assets/scripting_starting-scripts.md.4dc95916.lean.js",revision:null},{url:"assets/scripting_troubleshooting.md.db46a46d.js",revision:null},{url:"assets/scripting_troubleshooting.md.db46a46d.lean.js",revision:null},{url:"assets/scripting_typescript.md.ba10533a.js",revision:null},{url:"assets/scripting_typescript.md.ba10533a.lean.js",revision:null},{url:"assets/scripting_what-is-script.md.7c157c37.js",revision:null},{url:"assets/scripting_what-is-script.md.7c157c37.lean.js",revision:null},{url:"assets/servers_index.md.76b3475c.js",revision:null},{url:"assets/servers_index.md.76b3475c.lean.js",revision:null},{url:"assets/servers_raknet-and-mcpe.md.28805f94.js",revision:null},{url:"assets/servers_raknet-and-mcpe.md.28805f94.lean.js",revision:null},{url:"assets/servers_server-software.md.ae939804.js",revision:null},{url:"assets/servers_server-software.md.ae939804.lean.js",revision:null},{url:"assets/style.4f0fb741.css",revision:null},{url:"assets/test.md.51807e58.js",revision:null},{url:"assets/test.md.51807e58.lean.js",revision:null},{url:"assets/visuals_animated-entity-texture.md.e7811daa.js",revision:null},{url:"assets/visuals_animated-entity-texture.md.e7811daa.lean.js",revision:null},{url:"assets/visuals_animation-effects.md.8ed778d9.js",revision:null},{url:"assets/visuals_animation-effects.md.8ed778d9.lean.js",revision:null},{url:"assets/visuals_bedrock-modeling.md.1a4555ba.js",revision:null},{url:"assets/visuals_bedrock-modeling.md.1a4555ba.lean.js",revision:null},{url:"assets/visuals_custom-skin-packs.md.efb97c73.js",revision:null},{url:"assets/visuals_custom-skin-packs.md.efb97c73.lean.js",revision:null},{url:"assets/visuals_death-animations.md.eb939627.js",revision:null},{url:"assets/visuals_death-animations.md.eb939627.lean.js",revision:null},{url:"assets/visuals_glowing-texture.md.38993dee.js",revision:null},{url:"assets/visuals_glowing-texture.md.38993dee.lean.js",revision:null},{url:"assets/visuals_index.md.3d610435.js",revision:null},{url:"assets/visuals_index.md.3d610435.lean.js",revision:null},{url:"assets/visuals_introduction.md.cc93f99e.js",revision:null},{url:"assets/visuals_introduction.md.cc93f99e.lean.js",revision:null},{url:"assets/visuals_leash-position.md.4a80cfdb.js",revision:null},{url:"assets/visuals_leash-position.md.4a80cfdb.lean.js",revision:null},{url:"assets/visuals_material-creations.md.69db6dc2.js",revision:null},{url:"assets/visuals_material-creations.md.69db6dc2.lean.js",revision:null},{url:"assets/visuals_materials.md.861b3008.js",revision:null},{url:"assets/visuals_materials.md.861b3008.lean.js",revision:null},{url:"assets/visuals_math-based-animations.md.3105e432.js",revision:null},{url:"assets/visuals_math-based-animations.md.3105e432.lean.js",revision:null},{url:"assets/visuals_player-geometry.md.af61cdf5.js",revision:null},{url:"assets/visuals_player-geometry.md.af61cdf5.lean.js",revision:null},{url:"assets/visuals_remove-shadows.md.a8da8c8c.js",revision:null},{url:"assets/visuals_remove-shadows.md.a8da8c8c.lean.js",revision:null},{url:"assets/visuals_retexturing-spawn-eggs.md.f78bd6c6.js",revision:null},{url:"assets/visuals_retexturing-spawn-eggs.md.f78bd6c6.lean.js",revision:null},{url:"assets/visuals_structure-presentation.md.8c0c0849.js",revision:null},{url:"assets/visuals_structure-presentation.md.8c0c0849.lean.js",revision:null},{url:"assets/vr_editing-your-first-model.md.a36ec203.js",revision:null},{url:"assets/vr_editing-your-first-model.md.a36ec203.lean.js",revision:null},{url:"assets/vr_index.md.9978101e.js",revision:null},{url:"assets/vr_index.md.9978101e.lean.js",revision:null},{url:"assets/vr_installing-bedrock-vr.md.9c555f42.js",revision:null},{url:"assets/vr_installing-bedrock-vr.md.9c555f42.lean.js",revision:null},{url:"assets/vr_pack_setup.md.827af389.js",revision:null},{url:"assets/vr_pack_setup.md.827af389.lean.js",revision:null},{url:"assets/world-generation_biome-tags.md.609c999c.js",revision:null},{url:"assets/world-generation_biome-tags.md.609c999c.lean.js",revision:null},{url:"assets/world-generation_biomes.md.92c1a0be.js",revision:null},{url:"assets/world-generation_biomes.md.92c1a0be.lean.js",revision:null},{url:"assets/world-generation_custom-ores.md.04d0226f.js",revision:null},{url:"assets/world-generation_custom-ores.md.04d0226f.lean.js",revision:null},{url:"assets/world-generation_feature-block-conditions.md.998c231a.js",revision:null},{url:"assets/world-generation_feature-block-conditions.md.998c231a.lean.js",revision:null},{url:"assets/world-generation_feature-types.md.74e79427.js",revision:null},{url:"assets/world-generation_feature-types.md.74e79427.lean.js",revision:null},{url:"assets/world-generation_heightmap-noise.md.d779fdf3.js",revision:null},{url:"assets/world-generation_heightmap-noise.md.d779fdf3.lean.js",revision:null},{url:"assets/world-generation_index.md.548a4d28.js",revision:null},{url:"assets/world-generation_index.md.548a4d28.lean.js",revision:null},{url:"assets/world-generation_structure-features.md.c2b243ad.js",revision:null},{url:"assets/world-generation_structure-features.md.c2b243ad.lean.js",revision:null},{url:"assets/world-generation_surface-builder.md.12c9f67a.js",revision:null},{url:"assets/world-generation_surface-builder.md.12c9f67a.lean.js",revision:null},{url:"assets/world-generation_world-generation-intro.md.5fe13c13.js",revision:null},{url:"assets/world-generation_world-generation-intro.md.5fe13c13.lean.js",revision:null},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"assets/images/favicons/android-chrome-192x192.png",revision:"1fb5ac37a9c926d44d9377dffdb866ec"},{url:"assets/images/favicons/android-chrome-256x256.png",revision:"7403912a35eebe25b54355dfd27106af"},{url:"manifest.webmanifest",revision:"c5a08b36b4610e940947bce83726f2a1"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
