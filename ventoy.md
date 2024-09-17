- 关于ventoy引导失败SBAT data failed

  1. 原因

     >(这里引用GitHub上的原文：https://github.com/ventoy/Ventoy/issues/2692）

- Warning, wall of text (sorry!): Here's what I've learned: Ventoy needs to update to Shim 15.8 because some systems were updated to that.
  警告，文字墙（抱歉！这是我学到的：Ventoy 需要更新到 Shim 15.8，因为一些系统已经更新到该版本。
- I did a ton of research and from what I've found, it seems that in early February, Shim 15.8 was pushed out to address some security problems, and one of the things it does when installed is that it makes the system not be able to boot older Shim versions because they have security problems.
  我做了大量研究，从我发现的情况来看，似乎在 2 月初，Shim 15.8 被推出以解决一些安全问题，安装后它所做的一件事是它使系统无法启动较旧的 Shim 版本，因为它们存在安全问题。
- The only way to get around this block list is to reset it using mokutil [as detailed here](https://en.opensuse.org/openSUSE:UEFI#Reset_SBAT_string_for_booting_to_old_shim_in_old_Leap_image) or disable Secure Boot. The only distro I found that shipped Shim 15.8 is Fedora, so that means my hardware was updated with the new revocation list by Fedora (Fedora shipped it on March 12th, that's why I was booting a few weeks ago but not a few days ago). Not sure if Windows would do the same thing too. Not saying this happened to everyone, this is just my scenario. YMMV.
绕过此阻止列表的唯一方法是使用 mokutil 重置它[，如此处所述](https://en.opensuse.org/openSUSE:UEFI#Reset_SBAT_string_for_booting_to_old_shim_in_old_Leap_image)或禁用安全启动。我找到的唯一一个附带 Shim 15.8 的发行版是 Fedora，所以这意味着我的硬件已经更新了 Fedora 的新撤销列表（Fedora 在 3 月 12 日发布了它，这就是为什么我在几周前启动而不是几天前启动）。不确定 Windows 是否也会做同样的事情。并不是说每个人都遇到了这种情况，这只是我的情况。YMMV。
- I also did some testing, openSUSE Tumbleweed uses Shim 15.7 and despite supporting Secure Boot, I couldn't boot the latest ISO on my hardware too. So I am assuming that Ventoy uses Shim 15.7 as well and as such, I can't boot it with Shim 15.8 updating my Revocation List.
  我还做了一些测试，openSUSE Tumbleweed 使用 Shim 15.7，尽管支持安全启动，但我也无法在我的硬件上启动最新的 ISO。所以我假设 Ventoy 也使用 Shim 15.7，因此，我无法使用 Shim 15.8 更新我的吊销列表来启动它。
- TLDR: Shim 15.8 was released. Addresses security vulnerabilities. Part of the thing it does is when installed is to make the system not boot older Shims because security. This means you can't boot Ventoy if youinstalled the update since it uses an older Shim version. Some operating systems pushed out this update (but not all, Fedora is a definite yes).
  TLDR：Shim 15.8 发布。解决安全漏洞。它所做的部分工作是在安装时使系统不启动较旧的 Shims，因为安全性。这意味着如果你安装了更新，你就无法启动 Ventoy，因为它使用的是较旧的 Shim 版本。一些操作系统推送了这个更新（但不是全部，Fedora 肯定是）。
  Correct me if I am wrong please, this is what I've gathered from an evening of research.
  如果我错了，请纠正我，这是我从一个晚上的研究中收集到的。
- I mostly used these three sources to get my info:
  	我主要使用这三个来源来获取我的信息：
  	https://www.suse.com/support/kb/doc/?id=000021080	
  	https://discourse.ubuntu.com/t/sbat-revocations-boot-process/34996
  	https://en.opensuse.org/openSUSE:UEFI#Reset_SBAT_string_for_booting_to_old_shim_in_old_Leap_image
  	https://koji.fedoraproject.org/koji/buildinfo?buildID=2423319

  >2.解决方案
  https://pan.baidu.com/s/1zKOuNW2iz9alfei3zBA2jQ 提取码: damf
  下载文件后，打开VENTOYEFI把文件复制进去，再把grub.efi改为grubx64.efi
  再次重新启动即可



