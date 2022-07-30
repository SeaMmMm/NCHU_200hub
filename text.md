### 就在几年前，[Figma](http://figma.com/)作为第一个利用 Web 的强大功能和可访问性的设计工具问世，同时承诺提供与原生应用程序相同的强大功能。他们的实时协作让每个人都大吃一惊。设计师们欣喜若狂地终于能够以零摩擦将他们的设计分享给他们的同事和客户，并看到多个鼠标指针同时绘制形状。这就像魔术一样

### 从那以后，我们已经走了很长一段路。今天，这种即时协作方法已被证明有助于创建一个有凝聚力和可靠的设计系统。一切都存在于 Web 上，而 Figma 充分利用了它，为设计师和开发人员整合了一切

## 什么是设计系统？

![https://images.ctfassets.net/ooa29xqb8tix/4GTCtu0ijSQ6CgCAUukcqY/f6cde30fe86bcd47d182a1e22671908f/2018-08-21_21-35-57.jpeg](https://images.ctfassets.net/ooa29xqb8tix/4GTCtu0ijSQ6CgCAUukcqY/f6cde30fe86bcd47d182a1e22671908f/2018-08-21_21-35-57.jpeg)

设计系统是协作和代码连接的生活方式指南。它不仅仅是一个风格指南，设计师是唯一的贡献者。它在整个团队中共享，包括设计师、开发人员、产品经理等。因此，设计系统在设计和代码方面都应该是内聚的、动态的、可重用的和可维护的。

它从 Figma 中的样式和组件开始，然后进入团队库，最终成为存在于易于引用、贡献和版本控制的地方的代码组件，例如 git 存储库。

## 这个课程

![https://images.ctfassets.net/ooa29xqb8tix/XOqFmDmhA2w8owcY2SW8m/5af316d96977e86ac59ec0649331b0b6/2018-08-22_21-02-48.jpeg](https://images.ctfassets.net/ooa29xqb8tix/XOqFmDmhA2w8owcY2SW8m/5af316d96977e86ac59ec0649331b0b6/2018-08-22_21-02-48.jpeg)

在本课程中，我们将学习如何使用可在团队中共享的可重复使用的样式、文本、颜色、图标和组件从头开始创建这个[设计系统](https://www.figma.com/file/BDvnImiFgrZR4bopmMD7vfbl/Design-Code-Design-System)。我们将从设计的基础知识开始，并通过先进的工作流程和技术来实现强大而持久的结果。我们将使用矢量网络设计图标，应用约束以获得最大适应性，并使用内置工具快速原型化。我们将学习如何将我们的设计传达给开发人员，以便每个人都保持同步。

## 设计系统剖析

![https://images.ctfassets.net/ooa29xqb8tix/4p5RK1m91esG8wG2QO8wwy/51ef299dbbc56e39e725eae63dab3798/design-system-all.jpg](https://images.ctfassets.net/ooa29xqb8tix/4p5RK1m91esG8wG2QO8wwy/51ef299dbbc56e39e725eae63dab3798/design-system-all.jpg)

设计系统由最终应用程序中的所有元素组成。这些元素应该被清晰地组织成样式和组件，这些样式和组件在单独的文档中的单一事实来源中引用。该文档应该易于团队中的任何人维护。

如果您的开发人员参与了 Figma，您可以将您的设计系统文件作为 Web URL 共享。如果您还构建了一个站点，则可以使用[Live Embeds](https://www.figma.com/developers/embed)将所有更改完美地反映到您的站点中。

作为最后一步，当您授权设计人员贡献代码时，最好在代码中重新创建所有组件并显示代码示例。[Zendesk Garden](https://garden.zendesk.com/)设计系统就是一个很好的例子。

- 基础

设计系统的基础决定了设计语言的基调。制定品牌的背景很重要，清楚地表明您的徽标应该如何正确使用。此外，您应该设置主要颜色、排版和网格。

![https://images.ctfassets.net/ooa29xqb8tix/599xi6p7XWGWc2SQWUk4OU/86c2694f32ff3683ce117c204892c830/Foundation.jpg](https://images.ctfassets.net/ooa29xqb8tix/599xi6p7XWGWc2SQWUk4OU/86c2694f32ff3683ce117c204892c830/Foundation.jpg)

- Figma风格

在 Figma 中，大部分基础元素都设置在**Styles**中，其中包含颜色（包括渐变和图像）、**文本**甚至**效果**。您可以将它们作为库随时提供。在您设计时，您可以在 Inspector 中设置这些样式，例如**Text、Fill、Stroke和Effects**.

![https://images.ctfassets.net/ooa29xqb8tix/hjumaskDf2aWkuSMu2kKI/295e04f9777a5ff6b8ccc036d99bcd8a/2018-08-22_12-41-11.jpeg](https://images.ctfassets.net/ooa29xqb8tix/hjumaskDf2aWkuSMu2kKI/295e04f9777a5ff6b8ccc036d99bcd8a/2018-08-22_12-41-11.jpeg)

- 规则

基础的另一个重要部分是使用网格设置负间距、页面分割和元素放置规则。您可以演示如何使用不同的元素集来协调元素，或者使用阴影来与您的设计语言保持一致。

- 成分

组件是您的设计系统的构建块。它们通常是以可重用的方式组合在一起的元素集合，例如按钮、表单、导航、卡片、单元格和覆盖。可以在检查器中自定义文本内容、颜色和图像等组件元素。一个按钮组件可以多次复制，具有不同的内容和样式。

此外，您可以在组件中拥有组件，允许您自定义最复杂的元素组，例如图标、状态和复杂主题。

例如，表格单元格可以是包含切换的组件，而切换本身就是另一个组件。该切换可以在 ON 和 OFF 之间切换。

![https://images.ctfassets.net/ooa29xqb8tix/1ECQ9XKKiAIcQO4uwMi4q/8575d34390f9280ea2ec1e7372c1c4a0/Components.jpg](https://images.ctfassets.net/ooa29xqb8tix/1ECQ9XKKiAIcQO4uwMi4q/8575d34390f9280ea2ec1e7372c1c4a0/Components.jpg)

- 资产

资产可以是图标、背景、头像和其他用于填充应用内容的图像。一般来说，您可以使用[Unsplash](https://unsplash.com/)、[UINames](https://uinames.com/)、[UIFaces](http://uifaces.co/)甚至我们自己的[3D 背景](http://designcode.io/downloads)（需要 Pro 帐户）来为您的用户界面收集一些预设。由于这些图像可以设置为样式，因此可以快速创建列表并在您的设计系统中使用它们。

![https://images.ctfassets.net/ooa29xqb8tix/2WNGOrGUYgEqyceE4YCK4A/d2ab34722fb7ba5db58b091b389b468d/Assets.jpg](https://images.ctfassets.net/ooa29xqb8tix/2WNGOrGUYgEqyceE4YCK4A/d2ab34722fb7ba5db58b091b389b468d/Assets.jpg)

## Figma VS 素描

让我们从头开始，重点介绍 Figma 的特别之处。如今，设计工具彼此之间并没有太大的不同。布局相似，您会发现相同的基本功能，例如组件、库和开发人员移交。

虽然 Sketch 有丰富的插件，如[Craft](https://www.invisionapp.com/craft)、[Abstract](http://goabstract.com/)和[Zeplin](https://zeplin.io/)，但 Figma 一开始就嵌入了所有这些工具。最重要的是，Figma 具有实时协作功能，其所有内容都存在于 Web 上并且可以在 Windows 上运行。

## 从草图导入

Figma 将您的 Sketch 文件视为一等公民。它非常擅长导入，即使是像 Angle 这样复杂而庞大的库文件也可以以 95% 的准确率导入。所有图层和符号都保持不变。

## Mac 和 Windows

Figma 的与众不同之处在于它的协作性和始终可访问性。需要 Mac 或下载大型应用程序等障碍已成为过去。多亏了这一点，任何人都可以设计，并且任何人都可以在您设计的同时查看您的设计。作为一个每天都在使用它的人，我不能夸大它是多么改变游戏规则。您的团队不再过度依赖第三方工具，或者越来越复杂和分散的插件集，Figma 从一开始就拥有一切。因为很多开发人员都在 Windows 机器上工作，所以这对于让您的团队保持同步非常重要。任何开发人员都可以收到您的链接，检查设计并获取颜色、字体甚至 CSS、Swift 和 SVG 代码。

## 实时协作

Figma 确实是设计工具的 Google 文档。一旦您开始与其他设计师、开发人员和客户就设计项目进行实时合作，您就再也不想回去了。您可以与任何人分享您的设计，当您将像素变为现实时，他们可以观看您的进度、评论甚至参与。

## 版本控制

在 Figma 中，您所做的一切都会自动免费保存在历史记录中。您还可以手动提交（**Command + Option + S**）一个版本，以使事情保持在一个整洁的时间线上。您不必考虑分支，因为实时协作允许您确保没有人互相踩脚。不把它与 Git 做太多比较实际上是一种解脱，因为很多设计师都在为更高级的 Git 概念而苦恼。

## 矢量网络

Figma 引入了一种强大的矢量设计新方法。您可以创建类似网络的连接，而不是一对一的连接路径，从而使创建图标的整个过程更加灵活。

## 表现

虽然今天的大多数工具都专注于新功能的炒作系列，但 Figma 只专注于一个可靠的工作流程，其性能是同行无法比拟的。这是我首先从 Photoshop 切换的主要原因之一。对我来说，Figma 就像你可以在设计工具中获得的一样快。

# **当您每天在工具上工作 8 小时时，您节省的每一秒都很重要。**

每秒 60 帧的速度，每一次拖动按钮和每一次文本编辑都感觉非常流畅。放大和缩小没有延迟。

## 团队库

将 Abstract、Google Docs 和 Sketch 想象成一个工具。想象一个更有凝聚力和更流畅的体验。那是菲格玛。团队库允许您在整个团队中共享您的组件、样式和资产。您可以在右上角的**团队库图标**中启用和禁用这些。这对于您的设计系统是绝对必要的。

![https://images.ctfassets.net/ooa29xqb8tix/2IwSz500ZOmoyWWCoc28as/16c9a0ca05d3b125c9df82e0d6522718/DraggedImage.jpeg](https://images.ctfassets.net/ooa29xqb8tix/2IwSz500ZOmoyWWCoc28as/16c9a0ca05d3b125c9df82e0d6522718/DraggedImage.jpeg)

实时嵌入

![https://images.ctfassets.net/ooa29xqb8tix/2UsqS5vuaIieKQu2mmuIw8/8cf2bb69661cc294d914b0f1284ab79b/2018-08-21_21-36-33.jpeg](https://images.ctfassets.net/ooa29xqb8tix/2UsqS5vuaIieKQu2mmuIw8/8cf2bb69661cc294d914b0f1284ab79b/2018-08-21_21-36-33.jpeg)

您可以通过获取 iFrames HTML 代码将 Figma Frames 嵌入到您的网站中。这使您可以实时访问您的设计。

## 文本和颜色样式

在 Figma 中，您可以以不同的方式设置样式。它们不仅适用于文本，还适用于颜色和渐变，甚至是模糊和阴影等效果。

## 成分

Figma 中的组件毫不费力。与草图符号不同，您无需转到另一个页面来编辑主组件。覆盖可以直接在组件内的相应层中进行编辑。

## 键盘快捷键

Figma 中的快捷方式与 Sketch 非常相似。了解一些非常重要的关键区别：

- 1. **Command + Option + G**为选定元素创建一个框架。框架就像画板。
- 2. **Control + G**启用/禁用网格。
- 3. **K**表示缩放，它允许您动态缩放元素。
- 4. **C**用于评论。评论直接嵌入到 Figma 中，而不必经过不同的空间。

![https://images.ctfassets.net/ooa29xqb8tix/6p0y0ctndSgSEYoCGuY0Oc/abb316d4d22d62b2a8a95f9bba4ffbeb/Screen_Shot_2018-08-07_at_3.39.57_PM.png](https://images.ctfassets.net/ooa29xqb8tix/6p0y0ctndSgSEYoCGuY0Oc/abb316d4d22d62b2a8a95f9bba4ffbeb/Screen_Shot_2018-08-07_at_3.39.57_PM.png)

您可以在 shortcuts.design 找到更多以友好格式组织的[键盘快捷键](https://shortcuts.design/toolspage-figma.html)。

## 约束

Figma 中的约束与 Sketch 相同。它们允许您设置与父容器的距离、缩放或对齐。

## 原型制作

![https://images.ctfassets.net/ooa29xqb8tix/1tDc8E5KWE4c8wEc2cSUSY/7e1811337de9ad12576a1a43437e9848/DraggedImage-1.jpeg](https://images.ctfassets.net/ooa29xqb8tix/1tDc8E5KWE4c8wEc2cSUSY/7e1811337de9ad12576a1a43437e9848/DraggedImage-1.jpeg)

Figma 让使用过渡创建原型变得超级简单，无需下载单个第三方应用程序。原型工具位于 Inspector 中自己的选项卡中。您设置一个主屏幕，然后使用字符串连接到新屏幕。可以在**Instant**、**Dissolve**、**Move**、**Slide**和**Push**之间设置过渡动画。

## 检查

Figma 中的任何文档都可以与任何人共享。最重要的是，开发人员可以进来检查设计元素以获取颜色属性、大小和距离。他们可以选择任何资产并决定导出为 PNG、SVG 或使用 Swift、Java 或 CSS 的代码。

更一般地，可以授予受邀人员查看或编辑的权限。这意味着您几乎可以将团队中的任何人包括在内，包括产品经理、客户和通过链接的任何人。

## 评论

团队环境中的反馈循环非常重要。您可以按 C 来添加有针对性的评论。将出现一个气泡，您可以@提及团队中的任何人向他们发送通知。评论可以标记为已解决，就像在问题跟踪器中一样。

![https://images.ctfassets.net/ooa29xqb8tix/1gF9WzaSUyi8mc2oQCaG0Y/2845543b2db15b1148e82aabea090c24/DraggedImage-2.jpeg](https://images.ctfassets.net/ooa29xqb8tix/1gF9WzaSUyi8mc2oQCaG0Y/2845543b2db15b1148e82aabea090c24/DraggedImage-2.jpeg)

## 下载 Figma

要获得卓越的 Figma 体验，您可以[下载](https://www.figma.com/downloads/)适用于 Mac 或 PC 的桌面。这将允许您访问本地字体并拥有专用的设计应用程序，而无需大型浏览器栏。导航略有改进，您有一个额外的项目按钮，没有更多的后退/前进机制，如果您在 Mac 上启用了手势，这可能会有点烦人。

## 安装本地字体

为了从您的本地计算机访问字体，您需要在您的[帐户设置](https://www.figma.com/settings)中安装一个帮助程序（如果在浏览器中进行设计），或者只需获取 Figma 桌面应用程序。

## 创建团队

无论您是一个人还是团队中有数十人，您都应该创建一个 Starter Team，在您拥有超过 3 个项目和 2 个编辑器之前，它是免费的。对于大多数设计师来说，这足以完成他们需要完成的 100% 的工作。

## Figma 文件和项目

当你创建一个新的 Figma 文件时，它会出现在最近/草稿中。如果您建立了团队，则可以将文件放入项目中。一个项目可以在您的团队中共享。文件包含框架（如画板）和页面。

## 页面

通常，您使用 Pages 将 iOS 与 Android 或 Web 分开。但由于文件在项目中很容易访问，您可以决定不使用 Pages。但是，Pages 可以非常强大地共享整个项目，而无需选择多个文件。

## 起始模板

您可以访问[Figma 资源](https://www.figma.com/resources/)以获取一些初始模板，例如 Material 和 iOS UI Kits，以及在您第一次体验 Figma 时提供的默认模板。这对于使用状态栏、标签栏、按钮等元素非常有用，而无需从头开始创建它们。

此外，您还会发现免费的图标集，例如 [Iconic: Volume 1](https://www.figma.com/file/4UApXbATsMrvF48asT2qiU/Iconic:-Volume-1/duplicate)和[2](https://www.figma.com/file/bsKj2c8e8YSyTu1e1oIe4l/Iconic:-Volume-2/duplicate)。当您单击这些资源时，它们将被简单地复制到您的草稿中，直到您将它们放入项目中。

![https://images.ctfassets.net/ooa29xqb8tix/151GUCCNDKE0skccuOkO0G/e5b07a733aeec81c20256a623ee5687b/2018-08-15_18-31-05.jpg](https://images.ctfassets.net/ooa29xqb8tix/151GUCCNDKE0skccuOkO0G/e5b07a733aeec81c20256a623ee5687b/2018-08-15_18-31-05.jpg)

## iOS 11 UI Kit by Design+Code

在 Design+Code，过去 3 年我们一直在创建免费的 iOS UI 工具包。我们喜欢回馈社区。[我们已经调整了这个以与 Figma 组件一起使用](https://www.figma.com/file/PCmJ39G0VJEAp1WF0fUjrDEu/DesignCode-iOS11-GUI)。它与团队库一起使用，因此您只需删除您需要的元素，它们是完全自适应的！
