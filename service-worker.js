if(!self.define){let e,s={};const a=(a,f)=>(a=new URL(a+".js",f).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(f,r)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let c={};const t=e=>a(e,i),d={module:{uri:i},exports:c,require:t};s[i]=Promise.all(f.map((e=>d[e]||t(e)))).then((e=>(r(...e),c)))}}define(["./workbox-fa99c014"],(function(e){"use strict";e.setCacheNameDetails({prefix:"FreeSql 官方文档"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/404.e64f4166.js",revision:"75dee8f304900245e5701e8426d870bf"},{url:"assets/404.html.0c8252b8.js",revision:"d64b20567ce888f90e08ec9acbdd81f9"},{url:"assets/404.html.28649d53.js",revision:"52238f39263aa1f121cf8124de2b71be"},{url:"assets/ado.html.1f342313.js",revision:"add444e489592ffec7a75f61ee6eef19"},{url:"assets/ado.html.f1d2439f.js",revision:"153b3a56440e7ebceabfe551258354e4"},{url:"assets/aop-freesql-autofac.html.4f9dc403.js",revision:"0fe34992578831fba6c7442332373106"},{url:"assets/aop-freesql-autofac.html.615b2949.js",revision:"812ce2c9a49c54766ab22dd075e7f035"},{url:"assets/aop.html.2948a3f8.js",revision:"43da244f69627a30c4854d889b34d313"},{url:"assets/aop.html.cbbf7d71.js",revision:"ba38d9128bf376e1ee9c216525eb6d63"},{url:"assets/api.html.6e18d711.js",revision:"01ed2b87e2501ddb7f0a16e1e89f0372"},{url:"assets/api.html.729e81d8.js",revision:"c80ffc0ffaec7ba0a12bdd2d824ce662"},{url:"assets/app.63a2e03c.js",revision:"64915fc46d9ad8ea9713ac7c93ed9c41"},{url:"assets/auto.esm.edfc11f4.js",revision:"3005710dc3beaf11158e79fe70a4c0aa"},{url:"assets/awesome-freesql.html.60f96596.js",revision:"f038317bedb5933b9e8876558d28ae6d"},{url:"assets/awesome-freesql.html.c9c60db1.js",revision:"0b94166feb536f0abc981d3af6cf88cd"},{url:"assets/BaseEntity.html.2e915eee.js",revision:"818efe7bdca42bfc6341c5062ec29e1b"},{url:"assets/BaseEntity.html.722d8db3.js",revision:"14956c815666abf76f58b68d58aa34d2"},{url:"assets/cascade-delete.html.23767120.js",revision:"a412cd8def192f69ea1e7a8c5dcf8df9"},{url:"assets/cascade-delete.html.2c7249be.js",revision:"1e2d46db7358f16e536c77f5e28b166b"},{url:"assets/Cascade-Saving.html.0f085047.js",revision:"35c5cae02bafb3dc3106c0193c0edacc"},{url:"assets/Cascade-Saving.html.99cc56b2.js",revision:"01f9187cb1c578a8f31f264307b93df8"},{url:"assets/cascade-saving.html.b31f3828.js",revision:"e571d4ce72b221f138a364a5aa1e5560"},{url:"assets/cascade-saving.html.fc1a03a7.js",revision:"9687a61c4456cab962a8bf4a399987c2"},{url:"assets/change-log.html.2122014a.js",revision:"15f80df765319d1bfb4c7923a32a054d"},{url:"assets/change-log.html.492fe7de.js",revision:"a201ab8083aa3ad5bde8a15609269cf0"},{url:"assets/code-first.html.3646f531.js",revision:"de0b836465ddb519de4b6663c07b5308"},{url:"assets/code-first.html.d2ae613d.js",revision:"17959aaa638880090217ecd586b9f8cb"},{url:"assets/CodeFirst-Mode.html.071f7cd4.js",revision:"b70aecd7f5f399f46b63904039915cb9"},{url:"assets/CodeFirst-Mode.html.db9ae684.js",revision:"d5fd781b45514c0734730f345a6c330f"},{url:"assets/config-entity-from-db-first.html.35a028af.js",revision:"3e82f7678f85a64f0c94180f145e92d5"},{url:"assets/config-entity-from-db-first.html.8b695379.js",revision:"37acb2ff8b40f3bcf115a796bf534348"},{url:"assets/contributing.html.df0b7704.js",revision:"574f4d22cd46e126ab192ceeef238dd5"},{url:"assets/contributing.html.f25b0321.js",revision:"757feab49632f2ddaf0467704cc0788f"},{url:"assets/custom-attribute.html.4c2963e6.js",revision:"216f8b706d6b10d3315ed5fd0f640c7a"},{url:"assets/custom-attribute.html.8d3439e5.js",revision:"d65e0544446c4f2b98a5b60186f10b30"},{url:"assets/db-context.html.2fa1979b.js",revision:"90c91eb492a54d4eff4f8c5c884c0be7"},{url:"assets/db-context.html.f5566979.js",revision:"1520b3c7c3d20b22b65907d08439c182"},{url:"assets/db-first.html.483fb5aa.js",revision:"d77376890eb195c79bca79cba14e9a55"},{url:"assets/db-first.html.76c5db47.js",revision:"b26aa9dc410bdbd6715e46c0a18d17a3"},{url:"assets/Delete-Data.html.1fb3ba05.js",revision:"5769a944c4024745fc66f53097621ff5"},{url:"assets/Delete-Data.html.8cd55c85.js",revision:"c9ca108bc9c1720d78b364e81bd95d73"},{url:"assets/delete.html.6862ef7b.js",revision:"ef51503b8c02759989ba66a4ab10f650"},{url:"assets/delete.html.88944f06.js",revision:"53f5c191c384246e617e43cc303402fc"},{url:"assets/donation.html.3027b6b4.js",revision:"357081adaca19a55294b9b032476874f"},{url:"assets/donation.html.4fe66c0b.js",revision:"9e6937d7b862e911812d61b8740d9ac0"},{url:"assets/entity-attribute.html.7505ed95.js",revision:"f3d4bac0b9d065c4ff6c2f227ae7ead5"},{url:"assets/entity-attribute.html.9473506b.js",revision:"88d3f2068ecb0531f94012b53e225ef1"},{url:"assets/Entity-Relationship.html.310eb7ec.js",revision:"13ccca76dfd3108998dfe40407216cb0"},{url:"assets/Entity-Relationship.html.e28ddfc0.js",revision:"c8a7b5a48adbc60df7bae74340de49f7"},{url:"assets/expression-function.html.08c4440d.js",revision:"edfed19a33f4e2e16047a1ac678198a9"},{url:"assets/expression-function.html.46d2d66c.js",revision:"5063c9a386b42b0d37873af901fb9bcb"},{url:"assets/faq.html.767e9bdc.js",revision:"736bbd80a349c6291ef9a95112759391"},{url:"assets/faq.html.d81e11a1.js",revision:"07cd6121d8aa1c96eefcfe520352e35a"},{url:"assets/filters.html.17b0d868.js",revision:"37ccb6216383d7027dd4ba6444270a92"},{url:"assets/filters.html.751c9aef.js",revision:"a0b9a7bbc2f5b29c03156fb1621d8d68"},{url:"assets/fluent-api.html.3b2d1dc5.js",revision:"55aef5418cd10a45386daa31f0fd4cfe"},{url:"assets/fluent-api.html.5897676a.js",revision:"80726923f5e4f78fe8e37daa8f9e7912"},{url:"assets/freesql-auditlog.html.742683b5.js",revision:"b3840e53a871ce71203e5a1767f0bfcf"},{url:"assets/freesql-auditlog.html.959b77d0.js",revision:"f0e4c333abdda9b69fd9b0a37a20387b"},{url:"assets/freesql-docker.html.0c835341.js",revision:"4d1424f93789940685aaf7af13e51197"},{url:"assets/freesql-docker.html.f7134fc0.js",revision:"a75d4ffd82b742871721b94f9c57f71a"},{url:"assets/freesql-provider-custom.html.5fea55ad.js",revision:"43f2249d5821ca4f7b817c981ce581b9"},{url:"assets/freesql-provider-custom.html.f24721b4.js",revision:"5ba6753a02087981631639e1d3dc8671"},{url:"assets/freesql-provider-mysqlconnector.html.7e5fc7a8.js",revision:"20b525682434df969a713c078e25ede3"},{url:"assets/freesql-provider-mysqlconnector.html.bfb13cc9.js",revision:"3272c9993ac1c83f1e239392126d3a7b"},{url:"assets/freesql-provider-odbc.html.6a1ba136.js",revision:"3c484388c4ce0158f1a921fb994e1791"},{url:"assets/freesql-provider-odbc.html.b48c983d.js",revision:"4329a81eb1c75edaa91664e2a371bfbe"},{url:"assets/freesql-provider-oracle.html.89eed08e.js",revision:"a50ad7ca4c7f3e4da4d799139125a197"},{url:"assets/freesql-provider-oracle.html.c3c17396.js",revision:"093033088093813b168b9a212fb34190"},{url:"assets/freesql-provider-postgresql.html.4cb77c8a.js",revision:"09fb2e4fcdd82752f2e5a6aff6face8e"},{url:"assets/freesql-provider-postgresql.html.8697d63c.js",revision:"62fb8a3f18e56707959dbb77f9bc8d2e"},{url:"assets/freesql-provider-sqlitecore.html.26531bf5.js",revision:"a1b07325a5aeec3e20a31b6eed860feb"},{url:"assets/freesql-provider-sqlitecore.html.a170c617.js",revision:"860515ffa4ea3d3dccafc6ea81da1187"},{url:"assets/getting-started.html.066d6b67.js",revision:"d1a904c6c6220cbf2771c2a3009c191d"},{url:"assets/getting-started.html.6e0fcf27.js",revision:"df0ad6239ac14d92b8cb491c32c7091d"},{url:"assets/getting-started.html.88293390.js",revision:"c8ffc94d49f837f183ca938abc945a1a"},{url:"assets/getting-started.html.bab879bb.js",revision:"93f5f67932dd9cdf30e2732d26ba3b2a"},{url:"assets/Greed-Loading.html.5a48d402.js",revision:"3ff5f35f62762dbb40e5b49a0f6863cb"},{url:"assets/Greed-Loading.html.7faa8713.js",revision:"0d2a7cfd8072ccd8b4f05f6e495bc5f5"},{url:"assets/Group-Aggregation-Query.html.9228d771.js",revision:"e709d86987eef9da81a3109a993eb101"},{url:"assets/Group-Aggregation-Query.html.eb0efcac.js",revision:"9650e0bf5cea4a77e95b630a0f7cf518"},{url:"assets/highlight.esm.9b852bc5.js",revision:"3457767fb4f7fe757ad6fb071f162a85"},{url:"assets/idlebus-freesql.html.25d27196.js",revision:"4c8d32751aefe0635109da0856bd5e22"},{url:"assets/idlebus-freesql.html.927430e1.js",revision:"88921f95b989dc00a4ce659df9e09d64"},{url:"assets/ifreesql-context.html.615e4fab.js",revision:"782c32fd630f48907684b20733209223"},{url:"assets/ifreesql-context.html.f0a3177f.js",revision:"b4f6fc66bc63a5d8ddc82b1702703390"},{url:"assets/index.e1c5a3de.js",revision:"96111972074fcec23cd9181bc4cc5906"},{url:"assets/index.html.00e42707.js",revision:"73e42a0621f8833a750626050aedf244"},{url:"assets/index.html.01fac6fe.js",revision:"9feed1b705e4445ab1d1b51d4c1a6bf9"},{url:"assets/index.html.108ad12a.js",revision:"f279f3a43bd091a9f213bfbc446fcf1e"},{url:"assets/index.html.1bc4c665.js",revision:"ebf6919e4466f6613dfb4912218e5284"},{url:"assets/index.html.27cf3aa5.js",revision:"c67b468c5a3c0b5f12179bc38b055ad9"},{url:"assets/index.html.5669473b.js",revision:"5665bb29c40faf854585c0c5851587a9"},{url:"assets/index.html.71503118.js",revision:"9f3ad39159dc5b6e8adc8d88a65ae5d2"},{url:"assets/index.html.77ff9958.js",revision:"81bfb69358844bf91d37c18aa47fb9c4"},{url:"assets/index.html.97a670e2.js",revision:"1f8825000a50b4146852b45f5123836d"},{url:"assets/index.html.e68b91f4.js",revision:"9ea15f16bde15994aa53de0ac220b82e"},{url:"assets/Insert-Data.html.c9373859.js",revision:"3c4f9e1af89b378c9863a2169d6b6a2e"},{url:"assets/Insert-Data.html.f7276464.js",revision:"a2d261280769f6255a23bb31dcc94ba4"},{url:"assets/insert-or-update.html.356eeb21.js",revision:"a396d614f6fb0f623f1efcd5306bf567"},{url:"assets/insert-or-update.html.9abf4107.js",revision:"f8027812fe79325e50d99c62d41e6618"},{url:"assets/insert-or-update.html.bb499d5b.js",revision:"e7183d7fdc760041a7eca9ee0da831c7"},{url:"assets/insert-or-update.html.c3730763.js",revision:"44e77758d9e70b8c1894069536dc56d5"},{url:"assets/insert.html.89b9b1ad.js",revision:"3c7e72f5e809d25cfe9318870e8a0a79"},{url:"assets/insert.html.d5bf3170.js",revision:"412d7a3dc94392b6fba338f63830033c"},{url:"assets/install.html.014eca2d.js",revision:"be9eacb005c346f5ebeaad0c54a3a1ec"},{url:"assets/install.html.523f38a1.js",revision:"b36927f393b5e4c151d778ed9b2d356a"},{url:"assets/install.html.9a681c78.js",revision:"7e2da2b5939395f7b363572c243e74e1"},{url:"assets/install.html.c801ef78.js",revision:"bc99c6e670fd29b08b41faabb34a505b"},{url:"assets/iselect-depcopy.html.330dbf8b.js",revision:"d2bc0b570b735dc0efd5c573efcd028a"},{url:"assets/iselect-depcopy.html.48ae4ae9.js",revision:"3082cfdca6ef339dd6a4e453cef579e2"},{url:"assets/issues-expression-groupbysum.html.3be25341.js",revision:"5163110820eed6bf29059a2880a332ad"},{url:"assets/issues-expression-groupbysum.html.6f80f9cf.js",revision:"96a2d3d4df4d21a511c01988fe0cb7a5"},{url:"assets/issues-in-valuetype.html.4df0b151.js",revision:"49a331a46668c0448e5f6f442b795ac7"},{url:"assets/issues-in-valuetype.html.89cb5627.js",revision:"126c67f2e82be3bb6baf0b83a59827ad"},{url:"assets/issues-mysql5_5.html.00f3b410.js",revision:"3f4c7fae41dd9e6c349417a3572cda68"},{url:"assets/issues-mysql5_5.html.e4dc9a86.js",revision:"d282888a37cbf4f08254c2baac04f7f4"},{url:"assets/Layout.b0995535.js",revision:"9b85cd7911c4b72c7f88ce68782f4302"},{url:"assets/Lazy-Loading.html.80ce801a.js",revision:"c2017038c942967b172034411726c3b9"},{url:"assets/Lazy-Loading.html.d42beec9.js",revision:"8fdbd961e19ce9eb9f8c8d11a9437790"},{url:"assets/Linq-to-Sql.html.18e947f3.js",revision:"1ce9be78ca92b2e20087e07cbd8eef0c"},{url:"assets/Linq-to-Sql.html.40aeeb4b.js",revision:"1dbc829abcb3cd8cff87c1c5ab28b06d"},{url:"assets/linq-to-sql.html.9b73139d.js",revision:"9454ca99fbc69c4a2040edfebbf15fd9"},{url:"assets/linq-to-sql.html.da27d586.js",revision:"a0bd2cef10cafc93249241788474372d"},{url:"assets/markdown.esm.77e8db25.js",revision:"4aa467006f9d51cf40293b9b69a0f27a"},{url:"assets/math.esm.cb9d4be3.js",revision:"cbf844f27edbc061c86ae840d70389f6"},{url:"assets/mermaid.esm.min.35088203.js",revision:"dff54a3d503ff2004c411be3e2992fc9"},{url:"assets/more.html.0d77c8d4.js",revision:"db3d9ddca0828adb21bf8643cded7245"},{url:"assets/more.html.4c8d49e9.js",revision:"f4000af39798fe5894a1b5392778db69"},{url:"assets/multi-tenancy.html.55da4c45.js",revision:"5a5264762b86289e14de387518654b2c"},{url:"assets/multi-tenancy.html.a4fd2ba3.js",revision:"79c5d62b4a11431c59c0ee7812b8ed13"},{url:"assets/navigate-attribute.html.5f6084e7.js",revision:"0248f9d58f81e3bdaa0c7312e2428b75"},{url:"assets/navigate-attribute.html.7e4781e5.js",revision:"3cc775b8f21786a398125d2fa9c11fb0"},{url:"assets/notes.esm.62c5f19d.js",revision:"eda65c99450fe02da90bde90cc614a56"},{url:"assets/Pagination.html.b8db43d9.js",revision:"c7f96d80c28686bc454c00dcb268fc15"},{url:"assets/Pagination.html.ea9732d5.js",revision:"8917bd4db4403fdcc490d3961c50ac76"},{url:"assets/paging.html.234f4b14.js",revision:"93a031dd9128bbdb47977ae4db070428"},{url:"assets/paging.html.b50db216.js",revision:"1c83f30edf56ac1b73534d5fb7f63129"},{url:"assets/Parent-Child-Relationship-Query.html.568672a1.js",revision:"943d967111e75e57e32e354e5342339f"},{url:"assets/Parent-Child-Relationship-Query.html.6a990114.js",revision:"8e1e40dac5fd2f39c496e2fff26bb932"},{url:"assets/performance.html.270a52b9.js",revision:"68d5122f4679246729b2d6a23348933a"},{url:"assets/performance.html.8cd38647.js",revision:"55c4bfecd1c19444fc142bf4b3fb558e"},{url:"assets/photoswipe.esm.2debdee5.js",revision:"442a3264b1db7eb84ffc880407e7565d"},{url:"assets/plugin-vue_export-helper.21dcd24c.js",revision:"b29b145139fc88e89a46af507277557d"},{url:"assets/Query-Data.html.883bcbc0.js",revision:"223a3ccd00931ce40c040096e3b063da"},{url:"assets/Query-Data.html.9a0b8988.js",revision:"5abfe7fc22e2ea70135554b9cdc6ba72"},{url:"assets/Query-from-Multi-Table.html.294abb32.js",revision:"4e4ab794ee4ece34266873ff10755413"},{url:"assets/Query-from-Multi-Table.html.f7b65262.js",revision:"011a6600ac37558a713fb68b2b41bda2"},{url:"assets/Query-from-Single-Table.html.0202ec36.js",revision:"88c40a5edcd691e3d10a449f2ba05b20"},{url:"assets/Query-from-Single-Table.html.254f9336.js",revision:"cc74cf935746b5bbe9ac9ec9edc30fae"},{url:"assets/read-write-splitting.html.060bcf61.js",revision:"426241f0fe99e69c9c842bdaf6df3f5f"},{url:"assets/read-write-splitting.html.5cf72ec5.js",revision:"0dedd43e33b8b931a6a75ba81a037944"},{url:"assets/Repository-Layer.html.15ffd9bd.js",revision:"55d91a0a214a936c4748731dd8bb76f9"},{url:"assets/Repository-Layer.html.4411fed7.js",revision:"3689d0a80e5cb38040965dedeb88990d"},{url:"assets/repository.html.3b561e9d.js",revision:"ea7cba64414bf8a519c3df27f29fee81"},{url:"assets/repository.html.5fecd48e.js",revision:"fc1f987ac8f4fa5ef6d8cb375e27503d"},{url:"assets/Return-Data.html.4bef8687.js",revision:"d9ef8bb6cda36419cd39fe6407ce76a5"},{url:"assets/Return-Data.html.c470eed0.js",revision:"748057c770f14a347bd1c77c76eb8f00"},{url:"assets/reveal.esm.41ec5d7f.js",revision:"f78a424fad98faac5d5ca8ebfbebe94b"},{url:"assets/search.esm.04894411.js",revision:"690b84c66badd2f8fa69d57bc7cdad19"},{url:"assets/select-as-tree.html.3a909c06.js",revision:"5f3f5b939db9a5062c0d994763af5b29"},{url:"assets/select-as-tree.html.b5fc3f10.js",revision:"2123f0698a57d18c3033a2a0f1a90481"},{url:"assets/select-group-by.html.12547b63.js",revision:"e8437ec2d42f99857c9b4dca74209f6b"},{url:"assets/select-group-by.html.cfbe131a.js",revision:"a40ed7fc83981ca296d335a6de87f2a8"},{url:"assets/select-include.html.2d0e1948.js",revision:"43f7e3ed201afde5e4d8bfcf50d5a251"},{url:"assets/select-include.html.8d809160.js",revision:"6996550ec72298f9fdd95f3d7038ec5c"},{url:"assets/select-lazy-loading.html.9f70ae9f.js",revision:"49a9efdb1e02b1b42f85e58346664579"},{url:"assets/select-lazy-loading.html.a49c7bd0.js",revision:"176e155928f2626ebc4e00a9d4d82af7"},{url:"assets/select-multi-table.html.b2779650.js",revision:"8ac167a583fc465030631cc34c062fa9"},{url:"assets/select-multi-table.html.d1aecb62.js",revision:"71ded17914d51c4176b4d1e599233473"},{url:"assets/select-return-data.html.a08c5417.js",revision:"d49c193e9f22f40a7e917aae53c7153d"},{url:"assets/select-return-data.html.f889bc37.js",revision:"2b0ac45ea5e9e2d20fa4a8bb70781733"},{url:"assets/select-single-table.html.4f9928cd.js",revision:"b92a5038121580536faa347307348156"},{url:"assets/select-single-table.html.bcfb4592.js",revision:"4c293966a01736eeea86459dc0102c50"},{url:"assets/select.html.2706e7c5.js",revision:"5e5540c0bc8bbb2068accbe28ba580ae"},{url:"assets/select.html.e99d359a.js",revision:"457e080edf9a6eefaef083ef788d76bf"},{url:"assets/service-support.html.2e45a62d.js",revision:"478d0f9ca3be3368a27f10055171c83a"},{url:"assets/service-support.html.61e8f998.js",revision:"2d3931890ea181c7d089b5e12542f14a"},{url:"assets/sharding.html.6912b3a1.js",revision:"4f364349018977845fb68708398cec57"},{url:"assets/sharding.html.95e39192.js",revision:"6eeb896412da0b38dbcd0b51221dfde2"},{url:"assets/SkipLink.5545699d.js",revision:"3b29c1edc74b994e41cc67f10f22b5f9"},{url:"assets/Slide.e4e5a8ba.js",revision:"a76326ce11c21aafc26ed6ce1e0d0384"},{url:"assets/style.f6e962fb.css",revision:"5040a739afce07a778a31848bfa5923b"},{url:"assets/transaction.html.69815a5e.js",revision:"150ad08b2f0e12e5bb54b220439c2827"},{url:"assets/transaction.html.9117a809.js",revision:"41488d46bc92da0d11688092a166655d"},{url:"assets/type-mapping.html.2814b074.js",revision:"8f3806178a18e5daa1003e3ee829dd6b"},{url:"assets/type-mapping.html.edf8fbe2.js",revision:"1f2892dc10b72e216e3ee720d73a834f"},{url:"assets/Unit-of-Work-Manager.html.3b523120.js",revision:"14341998394d63194f86fe1db921d7b4"},{url:"assets/Unit-of-Work-Manager.html.f7e43f34.js",revision:"0bae6ec96f14ff6735124c6ed4196164"},{url:"assets/Unit-of-Work.html.212f2843.js",revision:"b75031d09c193c0c3cd13b8455e8fe3f"},{url:"assets/unit-of-work.html.32472930.js",revision:"867ec6a6d738d92196b08b6ccc26fc7c"},{url:"assets/Unit-of-Work.html.6fef0251.js",revision:"f3f5ef2e34fe33482dcf2118936ff52b"},{url:"assets/unit-of-work.html.e9c11121.js",revision:"dd435f9a0ad171d1a5a78c4ac1dff3dd"},{url:"assets/unitofwork-manager.html.2710c2d6.js",revision:"0264960729994dcbfc1782d0d2e364ff"},{url:"assets/unitofwork-manager.html.fd308869.js",revision:"b7ccaa2daed838c930a37419ac886dcc"},{url:"assets/Update-Data.html.2f0b4385.js",revision:"c9d6a5229454c81e77ec6123860b0cb1"},{url:"assets/Update-Data.html.b6b0707c.js",revision:"e512ccba85c86613fa18b49ea13df51b"},{url:"assets/update.html.9316ef43.js",revision:"b9cd233f6c57886f2900d9cebc5277c9"},{url:"assets/update.html.e17bb4fa.js",revision:"833dae0673c5a70c8c77bcc9fc42e000"},{url:"assets/vs-dapper.html.1d07d6d1.js",revision:"7add6e8d1fc3c2890a2124b7c4a48845"},{url:"assets/vs-dapper.html.fd63a96f.js",revision:"2132951702fccec719263ff426b882a2"},{url:"assets/vs-entity-framework.html.02b622c3.js",revision:"179e0623b88e835a7810dbfe5300755b"},{url:"assets/vs-entity-framework.html.2af8db67.js",revision:"6a94320f03af61bcb6738bcdeab83e61"},{url:"assets/With-Sql.html.02c6e902.js",revision:"c5c9815e13829039933011a4fefc4b2d"},{url:"assets/With-Sql.html.c5ff1b8f.js",revision:"8fe8f44add71b04496b6ade692e31a2b"},{url:"assets/withsql.html.3c85ec31.js",revision:"4343069e6693737e4f512e33036817c1"},{url:"assets/withsql.html.8df9a5ac.js",revision:"95a36c994672300896417e6255288418"},{url:"assets/withtempquery.html.7799fc2c.js",revision:"10d54f28a41e7b59a65905777fbd25d8"},{url:"assets/withtempquery.html.f2f57b9f.js",revision:"cb2bfa9368e6a2da615c3b88aa9d8023"},{url:"assets/zoom.esm.78977eba.js",revision:"8b3ee4f6f71ef2a7c85901cba6d23344"},{url:"js/base.js",revision:"e0eaa312c6884ef5f8a21a0ecf300b49"},{url:"logo.svg",revision:"1a8e6bd1f66927a7dcfeb4b22f33ffde"},{url:"assets/KaTeX_AMS-Regular.0cdd387c.woff2",revision:"66c678209ce93b6e2b583f02ce41529e"},{url:"assets/KaTeX_AMS-Regular.30da91e8.woff",revision:"10824af77e9961cfd548c8a458f10851"},{url:"assets/KaTeX_AMS-Regular.68534840.ttf",revision:"56573229753fad48910bda2ea1a6dd54"},{url:"assets/KaTeX_Caligraphic-Bold.07d8e303.ttf",revision:"497bf407c4c609c6cf1f1ad38f437f7f"},{url:"assets/KaTeX_Caligraphic-Bold.1ae6bd74.woff",revision:"de2ba279933d60f7819ff61f71c17bed"},{url:"assets/KaTeX_Caligraphic-Bold.de7701e4.woff2",revision:"a9e9b0953b078cd40f5e19ef4face6fc"},{url:"assets/KaTeX_Caligraphic-Regular.3398dd02.woff",revision:"a25140fbe6692bffe71a2ab861572eb3"},{url:"assets/KaTeX_Caligraphic-Regular.5d53e70a.woff2",revision:"08d95d99bf4a2b2dc7a876653857f154"},{url:"assets/KaTeX_Caligraphic-Regular.ed0b7437.ttf",revision:"e6fb499fc8f9925eea3138cccba17fff"},{url:"assets/KaTeX_Fraktur-Bold.74444efd.woff2",revision:"796f3797cdf36fcaea18c3070a608378"},{url:"assets/KaTeX_Fraktur-Bold.9163df9c.ttf",revision:"b9d7c4497cab3702487214651ab03744"},{url:"assets/KaTeX_Fraktur-Bold.9be7ceb8.woff",revision:"40934fc076960bb989d590db044fef62"},{url:"assets/KaTeX_Fraktur-Regular.1e6f9579.ttf",revision:"97a699d83318e9334a0deaea6ae5eda2"},{url:"assets/KaTeX_Fraktur-Regular.51814d27.woff2",revision:"f9e6a99f4a543b7d6cad1efb6cf1e4b1"},{url:"assets/KaTeX_Fraktur-Regular.5e28753b.woff",revision:"e435cda5784e21b26ab2d03fbcb56a99"},{url:"assets/KaTeX_Main-Bold.0f60d1b8.woff2",revision:"a9382e25bcf75d856718fcef54d7acdb"},{url:"assets/KaTeX_Main-Bold.138ac28d.ttf",revision:"8e431f7ece346b6282dae3d9d0e7a970"},{url:"assets/KaTeX_Main-Bold.c76c5d69.woff",revision:"4cdba6465ab9fac5d3833c6cdba7a8c3"},{url:"assets/KaTeX_Main-BoldItalic.70ee1f64.ttf",revision:"52fb39b0434c463d5df32419608ab08a"},{url:"assets/KaTeX_Main-BoldItalic.99cd42a3.woff2",revision:"d873734390c716d6e18ff3f71ac6eb8b"},{url:"assets/KaTeX_Main-BoldItalic.a6f7ec0d.woff",revision:"5f875f986a9bce1264e8c42417b56f74"},{url:"assets/KaTeX_Main-Italic.0d85ae7c.ttf",revision:"39349e0a2b366f38e2672b45aded2030"},{url:"assets/KaTeX_Main-Italic.97479ca6.woff2",revision:"652970624cde999882102fa2b6a8871f"},{url:"assets/KaTeX_Main-Italic.f1d6ef86.woff",revision:"8ffd28f6390231548ead99d7835887fa"},{url:"assets/KaTeX_Main-Regular.c2342cd8.woff2",revision:"f8a7f19f45060f7a177314855b8c7aa3"},{url:"assets/KaTeX_Main-Regular.c6368d87.woff",revision:"f1cdb692ee31c10b37262caffced5271"},{url:"assets/KaTeX_Main-Regular.d0332f52.ttf",revision:"818582dae57e6fac46202cfd844afabb"},{url:"assets/KaTeX_Math-BoldItalic.850c0af5.woff",revision:"48155e43d9a284b54753e50e4ba586dc"},{url:"assets/KaTeX_Math-BoldItalic.dc47344d.woff2",revision:"1320454d951ec809a7dbccb4f23fccf0"},{url:"assets/KaTeX_Math-BoldItalic.f9377ab0.ttf",revision:"6589c4f1f587f73f0ad0af8ae35ccb53"},{url:"assets/KaTeX_Math-Italic.08ce98e5.ttf",revision:"fe5ed5875d95b18c98546cb4f47304ff"},{url:"assets/KaTeX_Math-Italic.7af58c5e.woff2",revision:"d8b7a801bd87b324efcbae7394119c24"},{url:"assets/KaTeX_Math-Italic.8a8d2445.woff",revision:"ed7aea12d765f9e2d0f9bc7fa2be626c"},{url:"assets/KaTeX_SansSerif-Bold.1ece03f7.ttf",revision:"f2ac73121357210d91e5c3eaa42f72ea"},{url:"assets/KaTeX_SansSerif-Bold.e99ae511.woff2",revision:"ad546b4719bcf690a3604944b90b7e42"},{url:"assets/KaTeX_SansSerif-Bold.ece03cfd.woff",revision:"0e897d27f063facef504667290e408bd"},{url:"assets/KaTeX_SansSerif-Italic.00b26ac8.woff2",revision:"e934cbc86e2d59ceaf04102c43dc0b50"},{url:"assets/KaTeX_SansSerif-Italic.3931dd81.ttf",revision:"f60b4a34842bb524b562df092917a542"},{url:"assets/KaTeX_SansSerif-Italic.91ee6750.woff",revision:"ef725de572b71381dccf53918e300744"},{url:"assets/KaTeX_SansSerif-Regular.11e4dc8a.woff",revision:"5f8637ee731482c44a37789723f5e499"},{url:"assets/KaTeX_SansSerif-Regular.68e8c73e.woff2",revision:"1ac3ed6ebe34e473519ca1da86f7a384"},{url:"assets/KaTeX_SansSerif-Regular.f36ea897.ttf",revision:"3243452ee6817acd761c9757aef93c29"},{url:"assets/KaTeX_Script-Regular.036d4e95.woff2",revision:"1b3161eb8cc67462d6e8c2fb96c68507"},{url:"assets/KaTeX_Script-Regular.1c67f068.ttf",revision:"a189c37d73ffce63464635dc12cbbc96"},{url:"assets/KaTeX_Script-Regular.d96cdf2b.woff",revision:"a82fa2a7e18b8c7a1a9f6069844ebfb9"},{url:"assets/KaTeX_Size1-Regular.6b47c401.woff2",revision:"82ef26dc680ba60d884e051c73d9a42d"},{url:"assets/KaTeX_Size1-Regular.95b6d2f1.ttf",revision:"0d8d9204004bdf126342605f7bbdffe6"},{url:"assets/KaTeX_Size1-Regular.c943cc98.woff",revision:"4788ba5b6247e336f734b742fe9900d5"},{url:"assets/KaTeX_Size2-Regular.2014c523.woff",revision:"b0628bfd27c979a09f702a2277979888"},{url:"assets/KaTeX_Size2-Regular.a6b2099f.ttf",revision:"1fdda0e59ed35495ebac28badf210574"},{url:"assets/KaTeX_Size2-Regular.d04c5421.woff2",revision:"95a1da914c20455a07b7c9e2dcf2836d"},{url:"assets/KaTeX_Size3-Regular.500e04d5.ttf",revision:"963af864cbb10611ba33267ba7953777"},{url:"assets/KaTeX_Size3-Regular.6ab6b62e.woff",revision:"4de844d4552e941f6b9c38837a8d487b"},{url:"assets/KaTeX_Size4-Regular.99f9c675.woff",revision:"3045a61f722bc4b198450ce69b3e3824"},{url:"assets/KaTeX_Size4-Regular.a4af7d41.woff2",revision:"61522cd3d9043622e235ab57762754f2"},{url:"assets/KaTeX_Size4-Regular.c647367d.ttf",revision:"27a23ee69999affa55491c7dab8e53bf"},{url:"assets/KaTeX_Typewriter-Regular.71d517d6.woff2",revision:"b8b8393d2e65fcebda5fa99fa3264f41"},{url:"assets/KaTeX_Typewriter-Regular.e14fed02.woff",revision:"0e0460587676d22eae09accd6dcfebc6"},{url:"assets/KaTeX_Typewriter-Regular.f01f3e87.ttf",revision:"6bf4287568e1d3004b54d5d60f9f08f9"},{url:"assets/league-gothic.38fcc721.ttf",revision:"91295fa87df918411b49b7531da5d558"},{url:"assets/league-gothic.5eef6df8.woff",revision:"cd382dc8a9d6317864b5810a320effc5"},{url:"assets/league-gothic.8802c66a.eot",revision:"9900a4643cc63c5d8f969d2196f72572"},{url:"assets/source-sans-pro-italic.05d3615f.woff",revision:"e74f0128884561828ce8c9cf5c284ab8"},{url:"assets/source-sans-pro-italic.ad4b0799.eot",revision:"72217712eb8d28872e7069322f3fda23"},{url:"assets/source-sans-pro-italic.d13268af.ttf",revision:"8256cfd7e4017a7690814879409212cd"},{url:"assets/source-sans-pro-regular.c1865d89.ttf",revision:"2da39ecf9246383937da11b44b7bd9b4"},{url:"assets/source-sans-pro-regular.d4eaa48b.woff",revision:"e7acc589bb558fe58936a853f570193c"},{url:"assets/source-sans-pro-regular.dce8869d.eot",revision:"1d71438462d532b62b05cdd7e6d7197d"},{url:"assets/source-sans-pro-semibold.a53e2723.ttf",revision:"f3565095e6c9158140444970f5a2c5ed"},{url:"assets/source-sans-pro-semibold.b0abd273.woff",revision:"1cb8e94f1185f1131a0c895165998f2b"},{url:"assets/source-sans-pro-semibold.ebb8918d.eot",revision:"0f3da1edf1b5c6a94a6ad948a7664451"},{url:"assets/source-sans-pro-semibolditalic.7225cacc.woff",revision:"6b058fc2634b01d837c3432316c3141f"},{url:"assets/source-sans-pro-semibolditalic.dfe0b47a.eot",revision:"58153ac7194e141d1e73ea88c6b63861"},{url:"assets/source-sans-pro-semibolditalic.e8ec22b6.ttf",revision:"c7e698a4d0956f4a939f42a05685bbf5"},{url:"index.html",revision:"264a63b46c440e6d342e42c6c0f69ca3"},{url:"404.html",revision:"7990da625ed9a73dbf2245927ea95309"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
