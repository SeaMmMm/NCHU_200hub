### [SwiftUI](https://developer.apple.com/xcode/swiftui/) 无疑是设计师迈出代码第一步的最佳方式。由于其实时预览，您可以快速迭代并使用适用于所有 Apple 平台的几行代码创建强大的用户界面。将您的静态设计提升到一个新的水平，并使用原型工具的简单性构建真正的应用程序。

### 我们正在使用[Sketch](https://www.sketch.com/?ref=designcode)来设计插图的[界面和形状](https://shape.so/?ref=designcode)。提供所有设计和源文件，以便您在学习的同时升级您的 UI 技能。

## 下载

要学习本课程，您可以下载[源文件](https://downloads.ctfassets.net/ooa29xqb8tix/1iNvqLD6HHeyet8Aln22Mn/c0d6e68d1afcd7e31ef89b86221bb069/SwiftUI_Complete_Source_Files__updated__-1-60.zip)，这将帮助您比较您的进度。

## 这个课程

本课程与其他课程不同。我们关心设计，并希望确保您在此过程中做得更好。它是为热衷于为 iOS 和 macOS 协作和构建真实应用程序的设计师和开发人员编写的。虽然它不是适用于所有应用程序的一个代码库，但您只需学习一次，就可以将这些技术和控件应用到具有令人难以置信的质量、一致性和性能的所有平台上。它对初学者很友好，但它还包含用于构建出色用户界面和交互的设计技巧和高效的工作流程。

SwiftUI 让您可以非常轻松地为您的应用制作动画和添加手势。该代码轻量级且易于理解，即使对于来自[React](https://designcode.io/react-native)或 Flutter 的新手也是如此。

## 要求

需要最少的编码经验，例如 HTML 和 CSS。请注意[Xcode 11](https://developer.apple.com/xcode/)和[Catalina](https://www.apple.com/macos/catalina-preview/)是必不可少的。一旦你安装了所有东西，它会变得更加友好！我在本页末尾添加了一系列疑难解答，以帮助您解决可能遇到的问题。

## 状态和动画

过渡就像 `Keynote` 中的`Magic Move`。您只需要设置状态，**SwiftUI**就会为您计算出两种状态之间的转换。

```swift
@State var show = true

.onTapGesture {
    self.show.toggle()
}
```

## 动画

SwiftUI 提供了多种方法来为您的过渡设置动画。他们甚至有自己的基于物理的内置函数，允许您使用超调并将弹性应用于动画。

```swift
// Linear
.animation(.linear)

// Ease Animation
.animation(.easeInOut(duration: 0.3))

// Animation with Delay
.animation(Animation.easeOut(duration: 0.6).delay(0.1))

// Spring
.animation(.spring())
```

## 堆栈

如果您不熟悉 SwiftUI 中的堆栈，我建议您经常使用 Spacer。默认情况下，视图采用最小大小的子元素。这是我为帮助您理解而制作的图像。

![https://images.ctfassets.net/ooa29xqb8tix/498TuiIbNIxOLgt8CAkJ6h/23dbb3569846b091eb65c7cab4c942ec/1.1.jpg](https://images.ctfassets.net/ooa29xqb8tix/498TuiIbNIxOLgt8CAkJ6h/23dbb3569846b091eb65c7cab4c942ec/1.1.jpg)

以下是我在 SwiftUI 中使用 Stacks 时学到的一些技巧。

```swift
// Stack views vertically and take full height
VStack {
  Spacer()
}

// Stack views horizontally and take full width
HStack {
  Spacer()
}

// Gap between views
VStack(spacing: 20) {}

// Stack views on top of each other in a Z (depth) unit
ZStack { 
    VStack {}
    HStack {}
}

// Take maximum width without Spacer()
.frame(minWidth: 0, maxWidth: .infinity)

// Align elements to the top left
ZStack(alignment: .topLeading) {}
```

## 适用于所有设备的 SwiftUI

SwiftUI 适用于 iPad、Mac、Apple TV 和 Watch。代码更改很少，您可以重用许多相同的组件。`Stacks`、`Controls`和`Layout`系统的工作方式相同，但需要进行一些调整。SwiftUI 的理念不是一次编写，到处应用，而是一次学习，到处应用。

例如，模态框会自动与上下文相关，为您提供关闭手势并为您正确调整它们的大小。大多数控件和数据都可以在所有平台上运行，只是有一些小的布局更改和导航。这些控件将使用适用于其特定平台的适当 UI 自动为您翻译。例如，一个Picker在 iOS 中看起来像一个 List，但在 Mac 中它看起来像一个下拉菜单。

```swift
// All
ZStack, VStack, HStack, TabView
NavigationView, Picker, Stepper, Slider, etc.
SF Symbols

// iPad / Mac
TabView

// Mac
Keyboard Shortcuts
```

## 拖放用户界面

视图、修改器和图像可以拖到预览和代码中。您构建的所有内容都会自动转换为生产代码。

在代码中就像在预览中一样，您可以使用 Command + Click 来获得一个上下文菜单，您可以在其中检查元素并访问许多有用的选项，例如嵌入 VStack或提取到子视图。

## 修饰符

您可以轻松地将修改器拖放到视图旁边，并且可以使用颜色、变换、视觉效果、内置控件和手势等新属性来增强它们。

```swift
.frame(width: 100, height: 100)
.background(Color.blue)
.shadow(radius: 10)
.offset(x: 10, y:10)
.blur()
.padding()
```

## SF 符号

您需要从 Apple 下载最新的[San Francisco 字体](https://developer.apple.com/fonts/)才能打开设计文件。Apple 在其新的 SF Symbols 应用程序中提供了[1000 个图标](https://developer.apple.com/design/human-interface-guidelines/sf-symbols/overview/)，这些图标可用作 Xcode 或设计工具中的矢量资产。

在 SwiftUI 中，您可以使用[SF Symbols](https://developer.apple.com/design/human-interface-guidelines/sf-symbols/overview/)的名称轻松生成图标。确保下载该应用程序。此外，您可以自定义大小（小、中、大）并更改图标颜色。

```jsx
Image(systemName: item.icon)
    .imageScale(.large)
    .foregroundColor(.blue)
    .frame(width: 32, height: 32)
```

## 视图和控件

您可以在设计工具中找到的基本元素或更复杂的交互式控件（如切换、滑块和数据选择器）在 SwiftUI 中免费提供。它们非常容易设计样式和自定义功能和数据。

```swift
Text
Image
Rectangle
Toggle
Picker
Stepper
Slider
```

## 视觉效果

SwiftUI 为您免费提供了一堆视觉效果，以便您可以玩它们。最重要的是，您甚至可以为它们设置动画，它会为您很好地过渡！

```swift
.rotationEffect(Angle(degrees: 30))
.rotation3DEffect(Angle(degrees: 60), axis: (x: 0, y: 10, z: 0))
.scaleEffect(0.9)
.blendMode(.hardLight)
.blur(radius: 20)
```

## 用户界面组件

就像在您的设计系统或 React 中一样，您应该尽可能地将 UI 分解为组件。要创建一个新组件，Command + 单击VStack 之类的容器，然后选择Extract to Subview。

```swift
VStack {
    Text("Card Back")
}
.frame(width: 340, height: 220.0)
通过编写组件名称来引用组件。组件是视图，仍然可以接收额外的修饰符，甚至不需要传递属性！

CardView()
    .background(show ? Color.red : Color.blue)
    .cornerRadius(10)
```

## 实时预览

SwiftUI 的有趣之处在于您所做的所有更改都是实时的，包括您使用的数据。Debug 代码允许您在 Swift UI 中快速测试数据和预览环境。它对于快速迭代非常强大。

您可以同时在多个设备上[预览](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=2ahUKEwj5jtWMsP3iAhXKxlkKHVUnAzoQwqsBMAB6BAgJEAQ&url=https%3A%2F%2Fdeveloper.apple.com%2Fvideos%2Fplay%2Fwwdc2019%2F233&usg=AOvVaw3h1U4_6nZ0rOmDpTufWqDd)您的 SwiftUI 设计。您必须先对内容视图进行分组，然后才能进行预览和数据设置。在这种情况下，我们使预览窗口具有自适应性。最重要的是，您可以固定预览，以便在更改代码时始终看到相同的屏幕。

```swift
Group {
    ContentView()
    ContentView()
        .previewLayout(.sizeThatFits) // Preview components
        .environment(\.sizeCategory, .extraExtraExtraLarge) // Accessibility
        .previewDevice("iPhone 8")  // Specific device
}
```

## 黑暗模式

要在深色模式下预览您的布局，您需要在 Debug 区域的 Content View 中添加一个修饰符。请注意，为了使您的设计在暗模式下运行良好，您应该尽可能使用它们的默认颜色和控件，例如导航视图。

```swift
ContentView(courses: testData)
    .environment(\.colorScheme, .dark)
```

## 声明性代码

在 SwiftUI 中，您将编写更短的[声明性](https://developer.apple.com/xcode/swiftui/)代码，所以这一切都是为了告诉 UI 应该做什么。它可读且直截了当。

## 自动缩进代码

当你编辑你的代码时，它最终会变得难以阅读，所以你可以在 Xcode 中使用 Re-Indent 来保持一切干净。这有点类似于 Prettier，但您必须选择代码并按Control + I。

## 四舍五入到最近的像素

SwiftUI 会为您进行[像素拟合](https://developer.apple.com/videos/play/wwdc2019/237/)，以便您的视图始终看起来清晰。

![https://images.ctfassets.net/ooa29xqb8tix/4bCvyl9l3pIwIjLZyGACFn/d8d89d4a24ecb8a72964703bbb8c1ee4/1.2.png](https://images.ctfassets.net/ooa29xqb8tix/4bCvyl9l3pIwIjLZyGACFn/d8d89d4a24ecb8a72964703bbb8c1ee4/1.2.png)

## 斯威夫特package

Swift 现在有一个[包管理器](https://swift.org/package-manager/)，让您可以轻松地从社区安装第三方库。要安装库，请转到您的项目设置 > Swift 包。

![https://images.ctfassets.net/ooa29xqb8tix/7ytpwYPd3rDGcpwOfT5AOu/dc71492821ce9e871d4154e8630c4a1f/1.3.png](https://images.ctfassets.net/ooa29xqb8tix/7ytpwYPd3rDGcpwOfT5AOu/dc71492821ce9e871d4154e8630c4a1f/1.3.png)

## 安装 Catalina 和 Xcode 11

[Catalina](https://www.apple.com/macos/catalina-preview/)和[Xcode 11](https://developer.apple.com/xcode/)需要使用实时预览功能运行 SwiftUI。要下载 Xcode，请前往 Mac App Store 并搜索 Xcode。安装完所有内容后，您必须安装一堆新组件并按照说明进行操作。

![https://images.ctfassets.net/ooa29xqb8tix/7BdQWW1OoQaMWiXqBJdF4x/294819de050484bfd1d1f187f40416af/1.4.jpeg](https://images.ctfassets.net/ooa29xqb8tix/7BdQWW1OoQaMWiXqBJdF4x/294819de050484bfd1d1f187f40416af/1.4.jpeg)

## 你的第一个 SwiftUI 应用

要创建应用程序，请单击Create a new Xcode project。然后，选择Single-View app。之后，您必须设置项目设置。标识符通常是您的反向域名。最后，确保选中Use SwiftUI。

![https://images.ctfassets.net/ooa29xqb8tix/5Fj8pbXytemHZtwbwT2fk8/ab0e1019abb9276e22d9151943159266/1.5.jpeg](https://images.ctfassets.net/ooa29xqb8tix/5Fj8pbXytemHZtwbwT2fk8/ab0e1019abb9276e22d9151943159266/1.5.jpeg)

完成应用设置后，您会看到预览版旁边的 SwiftUI 代码编辑器。确保单击右上角的Resume以实时查看结果。您还可以通过单击右上角的按钮来隐藏左导航和右检查器。

![https://images.ctfassets.net/ooa29xqb8tix/2fK6kpm2nB2jriJ0Ybnyi5/2d5e329d27b88a4f1cf4fc0fe74dffde/1.6.jpeg](https://images.ctfassets.net/ooa29xqb8tix/2fK6kpm2nB2jriJ0Ybnyi5/2d5e329d27b88a4f1cf4fc0fe74dffde/1.6.jpeg)

## 导入资产

如果您使用图像或字形，则必须导入PNG、JPG或PDF资产。照片通常保存为 JPG，而图标等矢量字形应保存为 PDF。PNG 用于更复杂的透明图像，这些图像需要在 PDF 中无法复制的精确度和像素完美度，例如渐变、注入位图的阴影。

## 应用程序图标

在 Sketch 中，你可以找到一个模板来创建你的 App Icon。自定义视觉对象后，您可以将所有内容导出到文件夹。然后，将图像拖放到资产内的应用程序图标中。确保删除未分配的图像并移动缺少的 3 个图像：Icon.png到 1024，icon_83.5@2x.png到 iPad 83.5pt (2x)，icon_76@2x.png到 iPad 76pt 2x。

![https://images.ctfassets.net/ooa29xqb8tix/4STiDa6j7rZcFcBIIcY1kA/993ae148a14a78d5c322dbc8428a8819/1.7.jpeg](https://images.ctfassets.net/ooa29xqb8tix/4STiDa6j7rZcFcBIIcY1kA/993ae148a14a78d5c322dbc8428a8819/1.7.jpeg)

## 资产中的颜色集

我建议直接在Assets中提前为您的应用设置颜色。像这样，您可以轻松地从 Inspect 和代码中引用这些颜色。最重要的是，这些颜色将支持亮/暗模式。我准备了一个Assets.xcassets文件夹，您可以在其中展开 Colors 文件夹并将其拖放到您的资产中。

![https://images.ctfassets.net/ooa29xqb8tix/6PonVoIumljqCPk3Ldu8o5/c48f50f57b05517b0ab27839baf59ca6/1.8.jpeg](https://images.ctfassets.net/ooa29xqb8tix/6PonVoIumljqCPk3Ldu8o5/c48f50f57b05517b0ab27839baf59ca6/1.8.jpeg)

在 Assets 中设置的颜色可以在这样的代码中引用。

```swift
Color("accent")
```

## 键盘快捷键

最重要的 Xcode 键盘快捷键如下：

- 1.`Cmd + 单击`：代码或 UI 的上下文菜单。
- 2.`Option + 单击`：代码的快速信息。
- 3.`Cmd + 0`：显示/隐藏导航器。
- 4.`Cmd + Shift + L`：插入新元素。
- 5.`Cmd + R`：运行应用程序。
- 6.`Cmd + 。`：停止应用程序。

## 应用名称

要更改显示在您的应用图标旁边的应用名称，您需要转到您的项目**设置 > 信息 > 包名称**。

## 在设备上测试

在您的设备上使用您的应用程序是一种神奇的体验。请记住，您正在构建的内容是完全原生的并且非常高效。为了能够在您的手机上测试您的应用程序，您需要一个免费的[开发者帐户](https://developer.apple.com/programs/)，并通过 USB 连接。

## 教程

Apple 制作的[教程](https://developer.apple.com/tutorials/swiftui/tutorials)非常棒，而且执行得非常好。不过，他们往往会更多地与开发人员交谈，而且复杂性会迅速增加。但是，在您学习了我的课程之后，我相信您将能够回到那些教程并更好地理解它们。

## 以 SwiftUI 为例

如果您想快速了解如何在 SwiftUI 中执行某些操作，我建议您阅读来自 Hacking with Swift 的 Paul Hudson的[优秀快速教程](https://www.hackingwithswift.com/quick-start/swiftui)。

## 资源

在这么短的时间内涵盖所有内容是不可能的，因此使用出色的资源继续您的旅程很重要。这是一个[很好的清单](https://github.com/Juanpe/About-SwiftUI)。

## 时事通讯

有很好的新闻通讯可以获得关于 iOS 的最新资源：[iOS Dev Weekly](https://iosdevweekly.com/)和[iOS Goodies](https://ios-goodies.com/)。

## 更多视频

在我的[YouTube 频道](https://www.youtube.com/channel/UCTIhfOopxukTIRkbXJ3kN-g)中，我发布了一堆短片实验和新技术，所以如果你想进一步提高你的 SwiftUI 技能，你可以查看它们。
