var documenterSearchIndex = {"docs":
[{"location":"api/#OgmaJL-API-1","page":"OgmaJL API","title":"OgmaJL API","text":"","category":"section"},{"location":"api/#","page":"OgmaJL API","title":"OgmaJL API","text":"CurrentModule = OgmaJL","category":"page"},{"location":"api/#","page":"OgmaJL API","title":"OgmaJL API","text":"Modules = [OgmaJL]","category":"page"},{"location":"api/#OgmaJL.AW","page":"OgmaJL API","title":"OgmaJL.AW","text":"weight values AW\n\n\n\n\n\n","category":"type"},{"location":"api/#OgmaJL.FocalMatrix-Tuple{XIO3,XIO3,Int64}","page":"OgmaJL API","title":"OgmaJL.FocalMatrix","text":"FocalMatrix(isize::XIO3, osize::XIO3, radius::Int)\n\nCreates a FocalMatrix with given input sizes, output sizes and window radius.\n\nExamples\n\nimport Random # hide\nRandom.seed!(1234) # hide\njulia> f1 = FocalMatrix(XIO3(3, 4, 3), XIO3(4, 5, 3), 1)\nFocalMatrix(XIO3[3×4×3], XIO3[4×5×3], 1, UInt16[1 2; 1 3; 2 3; 2 3], UInt16[1 2; 1 3; … ; 2 4; 3 4], UInt32[1 37 … 145 199; 235 289 … 451 532; 586 622 … 730 784; 820 856 … 964 1018], Float32[0.59084463, 0.76679707, 0.5662374, 0.46008533, 0.7940257, 0.8541466, 0.20058604, 0.29861426, 0.24683718, 0.5796722  …  0.587723, 0.42177233, 0.4241981, 0.3947768, 0.6542789, 0.11622245, 0.7428318, 0.48858702, 0.36625502, 0.7665335], 1054)\n\n\n\n\n\n","category":"method"},{"location":"api/#OgmaJL.SparseFocalEncoder-Tuple{Array{XIO3,1},XIO3,Array{Int64,1}}","page":"OgmaJL API","title":"OgmaJL.SparseFocalEncoder","text":"SparseFocalEncoder(isizes::Vector{XIO3}, osize::XIO3, radii::Vector{Int})\n\nCreates a SparseFocalEncoder with given input sizes, output size and window radii.\n\nExamples\n\nimport Random # hide\nRandom.seed!(1234) # hide\njulia> e = SparseFocalEncoder([XIO3(3, 4, 3), XIO3(5, 3, 2)], XIO3(4, 5, 3), [1, 1])\n\n\n\n\n\n","category":"method"},{"location":"api/#OgmaJL.XIO","page":"OgmaJL API","title":"OgmaJL.XIO","text":"size index XIO\n\n\n\n\n\n","category":"type"},{"location":"api/#OgmaJL.XIO3","page":"OgmaJL API","title":"OgmaJL.XIO3","text":"XIO3 stores x, y, z values of type XIO\n\n\n\n\n\n","category":"type"},{"location":"api/#OgmaJL.XW","page":"OgmaJL API","title":"OgmaJL.XW","text":"weight index XW\n\n\n\n\n\n","category":"type"},{"location":"api/#OgmaJL.forward!-Tuple{FocalMatrix,Array{Float32,N} where N,Array{Float32,N} where N}","page":"OgmaJL API","title":"OgmaJL.forward!","text":"forward!(m::FocalMatrix, ins::Array{AW}, outs::Array{AW})\n\nRuns a FocalMatrix forward with given inputs ins, fills outs with activations.\n\nExamples\n\nimport Random # hide\nRandom.seed!(1234) # hide\nm = FocalMatrix(XIO3(3, 4, 3), XIO3(4, 5, 3), 1);\nRandom.seed!(56789) # hide\nins = AW.(rand([-1,1], 3 * 4 * 3) .* rand(3 * 4 * 3))\nouts = zeros(AW, 4 * 5 * 3)\n\njulia> forward!(f, ins, outs)\n60-element Array{Float32,1}:\n  0.2664309\n  1.8382773\n -0.067347586\n  1.5660199\n  0.26483107\n  2.2840357\n  0.71645874\n  1.9513111\n  2.453909\n  0.20646897\n  0.8714455\n  2.0525088\n  0.02235264\n  ⋮\n  2.767889\n  1.1482695\n  1.3052162\n  1.0694035\n  3.3695157\n  1.2626712\n  2.4824812\n  0.7995742\n  0.70120615\n  0.70984924\n  1.0287566\n  0.99003124\n\n\n\n\n\n","category":"method"},{"location":"api/#OgmaJL.forward!-Tuple{SparseFocalEncoder,Array{Array{Float32,1},1},Array{Float32,1}}","page":"OgmaJL API","title":"OgmaJL.forward!","text":"forward!(e::SparseFocalEncoder, ins::Vector{Vector{AW}}, outs::Vector{AW})\n\nRuns a SparseFocalEncoder forward with given inputs ins, fills outs with activations.\n\nExamples\n\nimport Random # hide\nRandom.seed!(34567)\nosize = XIO3(4, 5, 3)\nisizes = [XIO3(3, 4, 3), XIO3(5, 3, 2)]\ne = SparseFocalEncoder(isizes, osize, [1, 1])\nRandom.seed!(89123)\nouts = zero_array(AW, osize)\nins = [AW.(-1 .+ (2 .* rand(isize.x * isize.y * isize.z))) for isize in isizes]\n\njulia> forward!(e, ins, outs)\n60-element Array{Float32,1}:\n  1.9380938\n  1.412922\n  1.4253737\n  1.7408687\n -0.26759037\n  0.8767195\n  1.7407343\n -0.17168805\n  0.4381518\n  1.6412987\n  1.9755627\n  1.2878081\n  2.071682\n  ⋮\n  0.26863363\n  0.8956803\n  0.7418641\n  0.7577775\n  1.1317881\n  0.64095104\n  0.995874\n  1.9518139\n  1.7899414\n  1.6157343\n  1.5994829\n  1.4046599\n\n\n\n\n\n","category":"method"},{"location":"api/#OgmaJL.locateWeight-Tuple{FocalMatrix,UInt32}","page":"OgmaJL API","title":"OgmaJL.locateWeight","text":"locateWeight(m::FocalMatrix, index::XW)\nlocateWeight(m::FocalMatrix, index::Int) = locateWeight(m, XW(index))\n\nUsing m.osize dimensions, finds the input position [ix iy iz] and the output position [ox oy oz] for the given weight index.\n\nExamples\n\nm = FocalMatrix(XIO3(8,10,3), XIO3(5,4,3), 3);\n\njulia> i, o = locateWeight(m, 4142)\n(XIO3[4×5×2], XIO3[4×3×1])\n\n\n\n\n\n","category":"method"},{"location":"api/#OgmaJL.sparse-Tuple{FocalMatrix,Array{Float32,N} where N}","page":"OgmaJL API","title":"OgmaJL.sparse","text":"sparse(m::FocalMatrix, outs::Array{AW})\n\nUsing m.osize dimensions, chooses the top entry in the z-column for each x-y position in outs, returning a one-hot tensor (zero elsewhere) and an array of winner z-indices for each x-y position.\n\nExamples\n\nimport Random # hide\nRandom.seed!(1234) # hide\nm = FocalMatrix(XIO3(3, 4, 3), XIO3(4, 5, 3), 1);\nRandom.seed!(56789) # hide\nins = AW.(rand([-1,1], 3 * 4 * 3) .* rand(3 * 4 * 3))\nouts = zeros(AW, 4 * 5 * 3)\nouts = forward!(f, ins, outs)\njulia> sparseouts, tops = sparse(f, outs)\n(Float32[0.0, 0.0, 5.414768, 0.0, 0.0, 3.873893, 5.16832, 0.0, 0.0, 4.7478986  …  0.0, 7.7735734, 0.0, 0.0, 0.0, 0.0, 7.5303793, 4.5096736, 0.0, 0.0], UInt16[3, 3, 1, 1, 2, 3, 2, 2, 1, 2, 1, 3, 3, 1, 1, 2, 1, 1, 3, 1])\n\n\n\n\n\n","category":"method"},{"location":"api/#OgmaJL.sparse-Tuple{XIO3,Array{Float32,N} where N}","page":"OgmaJL API","title":"OgmaJL.sparse","text":"sparse(osize::XIO3, outs::Array{AW})\n\nUsing osize dimensions, chooses the top entry in the z-column for each x-y position in outs, returning a one-hot tensor (zero elsewhere) and an array of winner z-indices for each x-y position.\n\nExamples\n\nimport Random # hide\nRandom.seed!(1234) # hide\nm = FocalMatrix(XIO3(3, 4, 3), XIO3(4, 5, 3), 1);\nRandom.seed!(56789) # hide\nins = AW.(rand([-1,1], 3 * 4 * 3) .* rand(3 * 4 * 3))\nouts = zeros(AW, 4 * 5 * 3)\nouts = forward!(f, ins, outs)\njulia> sparseouts, tops = sparse(f.osize, outs)\n(Float32[0.0, 0.0, 5.414768, 0.0, 0.0, 3.873893, 5.16832, 0.0, 0.0, 4.7478986  …  0.0, 7.7735734, 0.0, 0.0, 0.0, 0.0, 7.5303793, 4.5096736, 0.0, 0.0], UInt16[3, 3, 1, 1, 2, 3, 2, 2, 1, 2, 1, 3, 3, 1, 1, 2, 1, 1, 3, 1])\n\n\n\n\n\n","category":"method"},{"location":"api/#OgmaJL.XIO3M","page":"OgmaJL API","title":"OgmaJL.XIO3M","text":"mutable version of XIO3\n\n\n\n\n\n","category":"type"},{"location":"custom_types/#OgmaJL-Custom-types-1","page":"OgmaJL Custom types","title":"OgmaJL Custom types","text":"","category":"section"},{"location":"custom_types/#","page":"OgmaJL Custom types","title":"OgmaJL Custom types","text":"OgmaJL uses custom types for small indexes (XIO - used to size and index input and output tensors), large indexes (XW - used to size and index weight matrices/tensors) and floating point values (AW - used for weight matrices and activations).","category":"page"},{"location":"custom_types/#","page":"OgmaJL Custom types","title":"OgmaJL Custom types","text":"\nconst AW = Float32\nconst XW = UInt32\nconst XIO = UInt16","category":"page"},{"location":"focal_encoder/#The-SparseFocalEncoder-locally-focussed-encoder-type-1","page":"The SparseFocalEncoder locally focussed encoder type","title":"The SparseFocalEncoder locally focussed encoder type","text":"","category":"section"},{"location":"focal_encoder/#","page":"The SparseFocalEncoder locally focussed encoder type","title":"The SparseFocalEncoder locally focussed encoder type","text":"The SparseFocalEncoder connects a number of input tensors to a single hidden activation tensor, using an appropriate number of FocalMatrix weight matrices.","category":"page"},{"location":"focal_encoder/#","page":"The SparseFocalEncoder locally focussed encoder type","title":"The SparseFocalEncoder locally focussed encoder type","text":"abstract type AbstractEncoder end\n\nstruct SparseFocalEncoder <: AbstractEncoder\n    inputs::Vector{Vector{AW}}\n    outputs::Vector{AW}\n    weight_tensors::Vector{FocalMatrix}\nend","category":"page"},{"location":"focal_encoder/#","page":"The SparseFocalEncoder locally focussed encoder type","title":"The SparseFocalEncoder locally focussed encoder type","text":"There are three fields for the type.","category":"page"},{"location":"focal_encoder/#inputs-1","page":"The SparseFocalEncoder locally focussed encoder type","title":"inputs","text":"","category":"section"},{"location":"focal_encoder/#","page":"The SparseFocalEncoder locally focussed encoder type","title":"The SparseFocalEncoder locally focussed encoder type","text":"A Vector of input tensors.","category":"page"},{"location":"focal_encoder/#outputs-1","page":"The SparseFocalEncoder locally focussed encoder type","title":"outputs","text":"","category":"section"},{"location":"focal_encoder/#","page":"The SparseFocalEncoder locally focussed encoder type","title":"The SparseFocalEncoder locally focussed encoder type","text":"The output actvation tensor.","category":"page"},{"location":"focal_encoder/#weight_tensors-1","page":"The SparseFocalEncoder locally focussed encoder type","title":"weight_tensors","text":"","category":"section"},{"location":"focal_encoder/#","page":"The SparseFocalEncoder locally focussed encoder type","title":"The SparseFocalEncoder locally focussed encoder type","text":"A Vector of FocalMatrix, one for each input tensor.","category":"page"},{"location":"focal_encoder/#Constructors-1","page":"The SparseFocalEncoder locally focussed encoder type","title":"Constructors","text":"","category":"section"},{"location":"focal_encoder/#","page":"The SparseFocalEncoder locally focussed encoder type","title":"The SparseFocalEncoder locally focussed encoder type","text":"SparseFocalEncoder","category":"page"},{"location":"focal_encoder/#OgmaJL.SparseFocalEncoder","page":"The SparseFocalEncoder locally focussed encoder type","title":"OgmaJL.SparseFocalEncoder","text":"SparseFocalEncoder(isizes::Vector{XIO3}, osize::XIO3, radii::Vector{Int})\n\nCreates a SparseFocalEncoder with given input sizes, output size and window radii.\n\nExamples\n\nimport Random # hide\nRandom.seed!(1234) # hide\njulia> e = SparseFocalEncoder([XIO3(3, 4, 3), XIO3(5, 3, 2)], XIO3(4, 5, 3), [1, 1])\n\n\n\n\n\n","category":"type"},{"location":"focal_encoder/#SparseFocalEncoder-methods-1","page":"The SparseFocalEncoder locally focussed encoder type","title":"SparseFocalEncoder methods","text":"","category":"section"},{"location":"focal_encoder/#","page":"The SparseFocalEncoder locally focussed encoder type","title":"The SparseFocalEncoder locally focussed encoder type","text":"There are two methods exported.","category":"page"},{"location":"focal_encoder/#","page":"The SparseFocalEncoder locally focussed encoder type","title":"The SparseFocalEncoder locally focussed encoder type","text":"forward!\nsparse","category":"page"},{"location":"focal_encoder/#","page":"The SparseFocalEncoder locally focussed encoder type","title":"The SparseFocalEncoder locally focussed encoder type","text":"forward!(e::SparseFocalEncoder, ins::Vector{Vector{AW}}, outs::Vector{AW})\nsparse(osize::XIO3, outs::Array{AW})","category":"page"},{"location":"getting_started/#Getting-Started-1","page":"Getting Started","title":"Getting Started","text":"","category":"section"},{"location":"getting_started/#","page":"Getting Started","title":"Getting Started","text":"OgmaJL is a registered package. To add it to your Julia packages, simply do the following in REPL:","category":"page"},{"location":"getting_started/#","page":"Getting Started","title":"Getting Started","text":"julia> Pkg.add(\"OgmaJL\")","category":"page"},{"location":"focal_matrix/#The-FocalMatrix-locally-focussed-weight-matrix-type-1","page":"The FocalMatrix locally focussed weight matrix type","title":"The FocalMatrix locally focussed weight matrix type","text":"","category":"section"},{"location":"focal_matrix/#","page":"The FocalMatrix locally focussed weight matrix type","title":"The FocalMatrix locally focussed weight matrix type","text":"The FocalMatrix is a weight matrix which connects an input tensor ins of size isize (isize.x×isize.y×isize.z) to an output tensor outs of size osize (osize.x×osize.y×osize.z), where each output receives input from units in an x-y window within radius units of the input unit \"below\" the x-y of the output unit.","category":"page"},{"location":"focal_matrix/#","page":"The FocalMatrix locally focussed weight matrix type","title":"The FocalMatrix locally focussed weight matrix type","text":"struct FocalMatrix\n    isize::XIO3\n    osize::XIO3\n    radius::XIO\n    xs::Array{XIO, 2}\n    ys::Array{XIO, 2}\n    idxs::Array{XW, 2}\n    ws::Array{AW, 1}\n    nWs::XW\nend","category":"page"},{"location":"focal_matrix/#","page":"The FocalMatrix locally focussed weight matrix type","title":"The FocalMatrix locally focussed weight matrix type","text":"There are nine fields for the type.","category":"page"},{"location":"focal_matrix/#isize-1","page":"The FocalMatrix locally focussed weight matrix type","title":"isize","text":"","category":"section"},{"location":"focal_matrix/#","page":"The FocalMatrix locally focussed weight matrix type","title":"The FocalMatrix locally focussed weight matrix type","text":"The isize field specifies the dimensions of the layer's inputs (or visible layer) in x, y and z.","category":"page"},{"location":"focal_matrix/#osize-1","page":"The FocalMatrix locally focussed weight matrix type","title":"osize","text":"","category":"section"},{"location":"focal_matrix/#","page":"The FocalMatrix locally focussed weight matrix type","title":"The FocalMatrix locally focussed weight matrix type","text":"The osize field specifies the dimensions of the layer's outputs (or hidden layer) in x, y and z.","category":"page"},{"location":"focal_matrix/#radius-1","page":"The FocalMatrix locally focussed weight matrix type","title":"radius","text":"","category":"section"},{"location":"focal_matrix/#","page":"The FocalMatrix locally focussed weight matrix type","title":"The FocalMatrix locally focussed weight matrix type","text":"The radius field specifies the radius of a square x-y window in the inputs which are connected to any unit in the output layer.","category":"page"},{"location":"focal_matrix/#xs-(derived)-1","page":"The FocalMatrix locally focussed weight matrix type","title":"xs (derived)","text":"","category":"section"},{"location":"focal_matrix/#","page":"The FocalMatrix locally focussed weight matrix type","title":"The FocalMatrix locally focussed weight matrix type","text":"The xs field contains the minimum and maximum x edges of the input window for each x-y of the outputs. This field is computed by the external constructor below.","category":"page"},{"location":"focal_matrix/#ys-(derived)-1","page":"The FocalMatrix locally focussed weight matrix type","title":"ys (derived)","text":"","category":"section"},{"location":"focal_matrix/#","page":"The FocalMatrix locally focussed weight matrix type","title":"The FocalMatrix locally focussed weight matrix type","text":"The ys field contains the minimum and maximum y edges of the input window for each x-y of the outputs. This field is computed by the external constructor below.","category":"page"},{"location":"focal_matrix/#idxs-(derived)-1","page":"The FocalMatrix locally focussed weight matrix type","title":"idxs (derived)","text":"","category":"section"},{"location":"focal_matrix/#","page":"The FocalMatrix locally focussed weight matrix type","title":"The FocalMatrix locally focussed weight matrix type","text":"The idxs field contains the starting weight index for a given output x-y-0 position. This field is computed by the external constructor below.","category":"page"},{"location":"focal_matrix/#ws-(derived)-1","page":"The FocalMatrix locally focussed weight matrix type","title":"ws (derived)","text":"","category":"section"},{"location":"focal_matrix/#","page":"The FocalMatrix locally focussed weight matrix type","title":"The FocalMatrix locally focussed weight matrix type","text":"The ws field contains the randomly initialised weight matrix. This field is computed by the external constructor below.","category":"page"},{"location":"focal_matrix/#nWs-(derived)-1","page":"The FocalMatrix locally focussed weight matrix type","title":"nWs (derived)","text":"","category":"section"},{"location":"focal_matrix/#","page":"The FocalMatrix locally focussed weight matrix type","title":"The FocalMatrix locally focussed weight matrix type","text":"The nWs field is the size of the weight matrix. This field is computed by the external constructor below.","category":"page"},{"location":"focal_matrix/#Constructors-1","page":"The FocalMatrix locally focussed weight matrix type","title":"Constructors","text":"","category":"section"},{"location":"focal_matrix/#","page":"The FocalMatrix locally focussed weight matrix type","title":"The FocalMatrix locally focussed weight matrix type","text":"FocalMatrix","category":"page"},{"location":"focal_matrix/#OgmaJL.FocalMatrix","page":"The FocalMatrix locally focussed weight matrix type","title":"OgmaJL.FocalMatrix","text":"FocalMatrix(isize::XIO3, osize::XIO3, radius::Int)\n\nCreates a FocalMatrix with given input sizes, output sizes and window radius.\n\nExamples\n\nimport Random # hide\nRandom.seed!(1234) # hide\njulia> f1 = FocalMatrix(XIO3(3, 4, 3), XIO3(4, 5, 3), 1)\nFocalMatrix(XIO3[3×4×3], XIO3[4×5×3], 1, UInt16[1 2; 1 3; 2 3; 2 3], UInt16[1 2; 1 3; … ; 2 4; 3 4], UInt32[1 37 … 145 199; 235 289 … 451 532; 586 622 … 730 784; 820 856 … 964 1018], Float32[0.59084463, 0.76679707, 0.5662374, 0.46008533, 0.7940257, 0.8541466, 0.20058604, 0.29861426, 0.24683718, 0.5796722  …  0.587723, 0.42177233, 0.4241981, 0.3947768, 0.6542789, 0.11622245, 0.7428318, 0.48858702, 0.36625502, 0.7665335], 1054)\n\n\n\n\n\n","category":"type"},{"location":"focal_matrix/#FocalMatrix-methods-1","page":"The FocalMatrix locally focussed weight matrix type","title":"FocalMatrix methods","text":"","category":"section"},{"location":"focal_matrix/#","page":"The FocalMatrix locally focussed weight matrix type","title":"The FocalMatrix locally focussed weight matrix type","text":"There are three methods exported.","category":"page"},{"location":"focal_matrix/#","page":"The FocalMatrix locally focussed weight matrix type","title":"The FocalMatrix locally focussed weight matrix type","text":"forward!\nsparse\nlocateWeight","category":"page"},{"location":"focal_matrix/#","page":"The FocalMatrix locally focussed weight matrix type","title":"The FocalMatrix locally focussed weight matrix type","text":"forward!\nsparse\nlocateWeight","category":"page"},{"location":"focal_matrix/#OgmaJL.forward!","page":"The FocalMatrix locally focussed weight matrix type","title":"OgmaJL.forward!","text":"forward!(m::FocalMatrix, ins::Array{AW}, outs::Array{AW})\n\nRuns a FocalMatrix forward with given inputs ins, fills outs with activations.\n\nExamples\n\nimport Random # hide\nRandom.seed!(1234) # hide\nm = FocalMatrix(XIO3(3, 4, 3), XIO3(4, 5, 3), 1);\nRandom.seed!(56789) # hide\nins = AW.(rand([-1,1], 3 * 4 * 3) .* rand(3 * 4 * 3))\nouts = zeros(AW, 4 * 5 * 3)\n\njulia> forward!(f, ins, outs)\n60-element Array{Float32,1}:\n  0.2664309\n  1.8382773\n -0.067347586\n  1.5660199\n  0.26483107\n  2.2840357\n  0.71645874\n  1.9513111\n  2.453909\n  0.20646897\n  0.8714455\n  2.0525088\n  0.02235264\n  ⋮\n  2.767889\n  1.1482695\n  1.3052162\n  1.0694035\n  3.3695157\n  1.2626712\n  2.4824812\n  0.7995742\n  0.70120615\n  0.70984924\n  1.0287566\n  0.99003124\n\n\n\n\n\nforward!(e::SparseFocalEncoder, ins::Vector{Vector{AW}}, outs::Vector{AW})\n\nRuns a SparseFocalEncoder forward with given inputs ins, fills outs with activations.\n\nExamples\n\nimport Random # hide\nRandom.seed!(34567)\nosize = XIO3(4, 5, 3)\nisizes = [XIO3(3, 4, 3), XIO3(5, 3, 2)]\ne = SparseFocalEncoder(isizes, osize, [1, 1])\nRandom.seed!(89123)\nouts = zero_array(AW, osize)\nins = [AW.(-1 .+ (2 .* rand(isize.x * isize.y * isize.z))) for isize in isizes]\n\njulia> forward!(e, ins, outs)\n60-element Array{Float32,1}:\n  1.9380938\n  1.412922\n  1.4253737\n  1.7408687\n -0.26759037\n  0.8767195\n  1.7407343\n -0.17168805\n  0.4381518\n  1.6412987\n  1.9755627\n  1.2878081\n  2.071682\n  ⋮\n  0.26863363\n  0.8956803\n  0.7418641\n  0.7577775\n  1.1317881\n  0.64095104\n  0.995874\n  1.9518139\n  1.7899414\n  1.6157343\n  1.5994829\n  1.4046599\n\n\n\n\n\n","category":"function"},{"location":"focal_matrix/#OgmaJL.sparse","page":"The FocalMatrix locally focussed weight matrix type","title":"OgmaJL.sparse","text":"sparse(m::FocalMatrix, outs::Array{AW})\n\nUsing m.osize dimensions, chooses the top entry in the z-column for each x-y position in outs, returning a one-hot tensor (zero elsewhere) and an array of winner z-indices for each x-y position.\n\nExamples\n\nimport Random # hide\nRandom.seed!(1234) # hide\nm = FocalMatrix(XIO3(3, 4, 3), XIO3(4, 5, 3), 1);\nRandom.seed!(56789) # hide\nins = AW.(rand([-1,1], 3 * 4 * 3) .* rand(3 * 4 * 3))\nouts = zeros(AW, 4 * 5 * 3)\nouts = forward!(f, ins, outs)\njulia> sparseouts, tops = sparse(f, outs)\n(Float32[0.0, 0.0, 5.414768, 0.0, 0.0, 3.873893, 5.16832, 0.0, 0.0, 4.7478986  …  0.0, 7.7735734, 0.0, 0.0, 0.0, 0.0, 7.5303793, 4.5096736, 0.0, 0.0], UInt16[3, 3, 1, 1, 2, 3, 2, 2, 1, 2, 1, 3, 3, 1, 1, 2, 1, 1, 3, 1])\n\n\n\n\n\nsparse(osize::XIO3, outs::Array{AW})\n\nUsing osize dimensions, chooses the top entry in the z-column for each x-y position in outs, returning a one-hot tensor (zero elsewhere) and an array of winner z-indices for each x-y position.\n\nExamples\n\nimport Random # hide\nRandom.seed!(1234) # hide\nm = FocalMatrix(XIO3(3, 4, 3), XIO3(4, 5, 3), 1);\nRandom.seed!(56789) # hide\nins = AW.(rand([-1,1], 3 * 4 * 3) .* rand(3 * 4 * 3))\nouts = zeros(AW, 4 * 5 * 3)\nouts = forward!(f, ins, outs)\njulia> sparseouts, tops = sparse(f.osize, outs)\n(Float32[0.0, 0.0, 5.414768, 0.0, 0.0, 3.873893, 5.16832, 0.0, 0.0, 4.7478986  …  0.0, 7.7735734, 0.0, 0.0, 0.0, 0.0, 7.5303793, 4.5096736, 0.0, 0.0], UInt16[3, 3, 1, 1, 2, 3, 2, 2, 1, 2, 1, 3, 3, 1, 1, 2, 1, 1, 3, 1])\n\n\n\n\n\n","category":"function"},{"location":"focal_matrix/#OgmaJL.locateWeight","page":"The FocalMatrix locally focussed weight matrix type","title":"OgmaJL.locateWeight","text":"locateWeight(m::FocalMatrix, index::XW)\nlocateWeight(m::FocalMatrix, index::Int) = locateWeight(m, XW(index))\n\nUsing m.osize dimensions, finds the input position [ix iy iz] and the output position [ox oy oz] for the given weight index.\n\nExamples\n\nm = FocalMatrix(XIO3(8,10,3), XIO3(5,4,3), 3);\n\njulia> i, o = locateWeight(m, 4142)\n(XIO3[4×5×2], XIO3[4×3×1])\n\n\n\n\n\n","category":"function"},{"location":"#OgmaJL-1","page":"OgmaJL","title":"OgmaJL","text":"","category":"section"},{"location":"#","page":"OgmaJL","title":"OgmaJL","text":"The OgmaJL package provides implementations of Ogma's Sparse Predictive Hierarchy technology, as found in OgmaNeo and PyOgmaNeo.","category":"page"},{"location":"#Contents-1","page":"OgmaJL","title":"Contents","text":"","category":"section"},{"location":"#","page":"OgmaJL","title":"OgmaJL","text":"Pages = [\n  \"getting_started.md\",\n  \"custom_types.md\",\n  \"focal_matrix.md\",\n  \"focal_encoder.md\",\n#=\n  \"indexing.md\",\n  \"split.md\",\n  \"modify.md\",\n  \"operators.md\",\n  \"apply.md\",\n  \"combine.md\",\n  \"readwrite.md\",\n  \"tables.md\",\n  \"dotfile.md\",\n  \"plotting.md\",\n=#\n  \"api.md\"\n]","category":"page"},{"location":"#Index-1","page":"OgmaJL","title":"Index","text":"","category":"section"},{"location":"#","page":"OgmaJL","title":"OgmaJL","text":"","category":"page"}]
}
